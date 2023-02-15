import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

function AddEditPost({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);
  const [values, setValues] = useState({});
  const [progress, setProgress] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    values,
  });

  const onSubmit = async (data) => {
    const storageRef = ref(storage, data.image[0].name);
    const uploadTask = uploadBytesResumable(storageRef, data.image[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //toast.info(`Image Uploading is ${progress} % done`);
        setProgress(progress);
      },
      (error) => {
        toast.error("An error happened while uploading your photo");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          delete data.image;
          setFormData({ ...data, imgUrl: downloadUrl });
        });
      }
    );

    reset();
  };
{
  /**add / update Post */}
  useEffect(() => {
    const addPost = async () => {
      try {
        await addDoc(collection(db, "blogs"), {
          ...formData,
          timestamp: serverTimestamp(),
          userId: user.uid,
          author: user.displayName,
        });
        navigate("/");
        toast.success("Your post has created successfully");
      } catch (error) {
        toast.error(
          "An error happened while adding the post, please try again later!"
        );
      }
    };
    const updatePost = async () => {
      try {
        await updateDoc(doc(db, "blogs", id), {
          ...formData,
          timestamp: serverTimestamp(),
          userId: user.uid,
          author: user.displayName,
        });
        navigate(-1);
        toast.success("Your post has updated successfully");
      } catch (error) {
        toast.error(
          "An error happened while updating the post, please try again later!"
        );
      }
    };
    
    if (id && formData) {
      updatePost();
    } else if (!id && formData) {
      addPost();
    }
  }, [formData]);
{
  /**getPostDetail */
}
  useEffect(() => {
    const getPostDetail = async () => {
      const docRef = doc(db, "blogs", id);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setValues({ ...snapshot.data()});
      }
    };
    id && getPostDetail();
  }, [id]);

  

  return (
    <div className="form-container">
      <div className="inner-container">
        <div className="above-form">
          <button onClick={() => navigate(-1)}>
            <img src="../assets/back.svg" alt="back" />
          </button>
          <h1>{id ? "Update Post" : "Create a new post"}</h1>
        </div>
        <form
          className="form"
          target="_blank"
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          {/**first row/title */}
          <div className="first-row">
            <input
              type="text"
              placeholder="Title"
              name="title"
              autoComplete="on"
              {...register("title", { required: true, maxLength: 100 })}
            />
            {errors.title && (
              <p>
                {errors.title.type === "required" && "This field is required."}
                {errors.title.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
          </div>

          {/**second row/tags & category */}
          <div className="second-row">
            {/**tags  */}
            <div className="second-row__tags">
              <input
                type="text"
                placeholder="Tags"
                name="tags"
                autoComplete="on"
                {...register("tags", { required: true, maxLength: 15 })}
              />
              {errors.tags && (
                <p>
                  {errors.tags.type === "required" && "This field is required."}
                  {errors.tags.type === "maxLength" && "Max length is 15 char."}
                </p>
              )}
            </div>

            {/**category  */}
            <div className="second-row__category">
              <select
                placeholder="Category"
                name="category"
                className="category"
                id="category"
                {...register("category", { required: true, maxLength: 15 })}
              >
                <option value="UI Design">UI Design</option>
                <option value="UX Design">UX Design</option>
                <option selected value="web">
                  web
                </option>
                <option value="NFT">NFT</option>
                <option value="DevOps">DevOps</option>
                <option value="ChatGPT">ChatGPT</option>
                <option value="Deployment">Deployment</option>
                <option value="SEO">SEO</option>
              </select>

              {errors.category && (
                <p>
                  {errors.category.type === "required" &&
                    "This field is required."}
                  {errors.category.type === "maxLength" &&
                    "Max length is 15 char."}
                </p>
              )}
            </div>
          </div>

          {/**third row/Checkbox & duration */}
          <div className="third-row">
            {/**Trending Checkbox  */}
            <div className="third-row__Checkbox  Checkbox">
              <div>
                <input
                  type="checkbox"
                  id="cb1"
                  className="cbx"
                  name="survey"
                  style={{ display: "none" }}
                  {...register("trending")}
                />

                <label htmlFor="cb1" className="check">
                  <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                  Add as a trending post!{" "}
                </label>
              </div>
            </div>

            {/**duration  */}
            <div className="third-row__duration">
              <input
                type="number"
                min="1"
                max="59"
                placeholder="Expected Reading Time (min.)"
                name="duration"
                autoComplete="on"
                {...register("duration", {
                  required: true,
                  min: 1,
                  max: 59,
                })}
              />

              {errors.duration && (
                <p>
                  {errors.duration.type === "required" &&
                    "This field is required."}
                  {errors.duration.type === "min" && "Minimum number is 1 ."}
                  {errors.duration.type === "max" && "Maximum number is 59 ."}
                </p>
              )}
            </div>
          </div>

          {/**fourth row/description */}
          <div className="fourth-row">
            <textarea
              name="description"
              placeholder="Description"
              cols="60"
              rows="8"
              {...register("description", { required: true, maxLength: 10000 })}
            ></textarea>
            {errors.description && (
              <p>
                {errors.description.type === "required" &&
                  "This field is required."}
                {errors.description.type === "maxLength" &&
                  "Max length is 10000 char."}
              </p>
            )}
          </div>

          {/**fifth row/image */}
          <div className="fifth-row">
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png, image/webp"
              name="image"
              {...register("image", {
                required: true,
              })}
            />

            {errors.image && (
              <p>
                {errors.image.type === "required" && "This field is required."}
              </p>
            )}
          </div>

          <input
            disabled={progress !== null && progress < 100}
            className="form-submit-btn"
            type="submit"
            value={id ? "Update" : "Submit"}
          />
        </form>
      </div>
    </div>
  );
}

export default AddEditPost;
