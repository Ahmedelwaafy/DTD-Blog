import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function AddEditPost() {
  const {
    register,
        handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
 
  const onSubmit = (data) => {
   console.log(data);
 };

  return (
    <div className="form-container">
      <div className="inner-container">
        <div className="above-form">
          <button onClick={() => navigate(-1)}>
            <img src="../assets/back.svg" alt="back" />
          </button>
          <h1>Create a new post</h1>
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
                {...register("tags", { required: true, maxLength: 20 })}
              />
              {errors.tags && (
                <p>
                  {errors.tags.type === "required" && "This field is required."}
                  {errors.tags.type === "maxLength" && "Max length is 20 char."}
                </p>
              )}
            </div>

            {/**category  */}
            <div className="second-row__category">
              <input
                type="text"
                placeholder="Category"
                name="category"
                autoComplete="on"
                list="category"
                {...register("category", { required: true, maxLength: 15 })}
              />
              <datalist className="category" id="category">
                <option value="UI Design" />
                <option value="UX Design" />
                <option value="Web" />
                <option value="NFT" />
                <option value="DevOps" />
                <option value="ChatGPT" />
                <option value="Deployment" />
                <option value="SEO" />
              </datalist>

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

          {/**third row/date & duration */}
          <div className="third-row">
            {/**tags */}
            <div className="third-row__date">
              <input
                type="date"
                name="date"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <p>
                  {errors.date.type === "required" && "This field is required."}
                </p>
              )}
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
              {...register("description", { required: true, maxLength: 3000 })}
            ></textarea>
            {errors.description && (
              <p>
                {errors.description.type === "required" &&
                  "This field is required."}
                {errors.description.type === "maxLength" &&
                  "Max length is 3000 char."}
              </p>
            )}
          </div>

          {/**radio buttons */}
          <div className="radio">
            <div>
              <input
                type="radio"
                id="cb1"
                className="cbx"
                name="survey"
                style={{ display: "none" }}
                {...register("trending", {
                  required: true,
                })}
              />

              <label htmlFor="cb1" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
                Trending post!{" "}
              </label>
              {errors.trending && (
                <p>
                  {errors.trending.type === "required" &&
                    "Please select any option."}
                </p>
              )}
            </div>
            <div>
              <input
                type="radio"
                id="cb2"
                className="cbx"
                name="survey"
                style={{ display: "none" }}
                {...register("trending", {
                  required: true,
                })}
              />
              <label htmlFor="cb2" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                  <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
                Normal post!
              </label>
              {errors.trending && (
                <p>
                  {errors.trending.type === "required" &&
                    "Please select any option."}
                </p>
              )}
            </div>
          </div>

          {/**fifth row/image */}
          <div className="fifth-row">
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png, image/webp"
              name="image"
              {...register("image", {
                required: true,
                maxSize: 50,
              })}
            />
            {errors.image && (
              <p>
                {errors.image.type === "required" && "This field is required."}
                {errors.image.type === "maxSize" && "Max length is 3000 char."}
              </p>
            )}
          </div>

          <input className="form-submit-btn" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default AddEditPost;
