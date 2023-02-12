import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    mode: "onTouched",
  });
  const navigate = useNavigate();
  const [signin, setSignin] = useState(true);

  const handleAuth = async (data) => {
    console.log(data);
    reset();
    if (signin){
const {user} = await signInWithEmailAndPassword(auth, data.email,data.password)
    }
    else{
       const {user} = await createUserWithEmailAndPassword(auth, data.email,data.password)
       await updateProfile(user, {displayName: `${data.firstName} ${data.lastName}`,});
    }
        //navigate("/", { replace: true });

  };


  return (
    <section className="signinContainer">
      <div className="signin">
        <div className="signin__left">
          <h2>DTD is the secret place for proficiency.</h2>
          <img
            className="authors"
            src="../assets/authors/1.jpg"
            alt="authors"
          />
          <p>
            Will Brett
            <span>Software Engineer at Google</span>
          </p>

          <img className="rating" src="../assets/rating.svg" alt="rating" />
        </div>
        <div className="signin__right">
          <div className="signin__right--above-form">
            <button className="logo" onClick={() => navigate("/")}>
              DTD
            </button>
            <h1>{signin ? "Sign in" : "Sign up"}</h1>
            <p className="welcome">
              {signin
                ? "Welcome back! Please enter your details."
                : "Hey, Enter your details to sign up."}
            </p>
          </div>
          <form target="_blank" onSubmit={handleSubmit(handleAuth)} method="POST">
            {/**First & Last Name */}

            {!signin && (
              <div className="name">
                <div className="firstName">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="first-name"
                    autoComplete="on"
                    {...register("firstName", {
                      required: true,
                      maxLength: 15,
                      minLength: 3,
                    })}
                  />
                  {errors.firstName && (
                    <p>
                      {errors.firstName.type === "required" &&
                        "This field is required."}

                      {errors.firstName.type === "maxLength" &&
                        "Max length is 15 char."}
                      {errors.firstName.type === "minLength" &&
                        "Min length is 3 char."}
                    </p>
                  )}
                </div>
                <div className="lastName">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="last-name"
                    autoComplete="on"
                    {...register("lastName", {
                      required: true,
                      maxLength: 15,
                      minLength: 3,
                    })}
                  />
                  {errors.lastName && (
                    <p>
                      {errors.lastName.type === "required" &&
                        "This field is required."}

                      {errors.lastName.type === "maxLength" &&
                        "Max length is 15 char."}
                      {errors.lastName.type === "minLength" &&
                        "Min length is 3 char."}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/**Email */}
            <div>
              <input
                type="text"
                placeholder="Email"
                name="email"
                autoComplete="on"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p>
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && " Invalid Email Address."}
                </p>
              )}
            </div>

            {/**Password */}

            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="on"
                {...register("password", {
                  required: true,
                  maxLength: 15,
                  minLength: 6,
                })}
              />
              {errors.password && (
                <p>
                  {errors.password.type === "required" &&
                    "This field is required."}
                  {errors.password.type === "maxLength" &&
                    "Password Max length is 15 char."}
                  {errors.password.type === "minLength" &&
                    "Password Min length is 6 char."}
                </p>
              )}
            </div>

            {/**Confirm Password */}
            {!signin && (
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="Confirm-password"
                  autoComplete="on"
                  {...register("confirmPassword", {
                    required: true,
                    maxLength: 15,
                    minLength: 6,
                    validate: (value) => value === getValues("password"),
                  })}
                />
                {errors.confirmPassword && (
                  <p>
                    {errors.confirmPassword.type === "required" &&
                      "This field is required."}
                    {errors.confirmPassword.type === "maxLength" &&
                      "Password Max length is 15 char."}
                    {errors.confirmPassword.type === "minLength" &&
                      "Password Min length is 6 char."}
                    {errors.confirmPassword.type === "validate" &&
                      "Passwords don't match ."}
                  </p>
                )}
              </div>
            )}
            <button type="submit">{signin ? "Sign in" : "Sign up"}</button>
          </form>

          <div className="signin__right--under-form">
            <p>— Or join With —</p>
            <div className="sign-options">
              <button onClick={() => navigate("")}>
                <img src="../assets/Google.svg" alt="google" />
                Google
              </button>
              <button onClick={() => navigate("")}>
                <img src="../assets/GitHub.svg" alt="GitHub" />
                GitHub
              </button>
              <button onClick={() => navigate("")}>
                <img src="../assets/Facebook.svg" alt="Facebook" />
                Facebook
              </button>
            </div>
            <div className="dont">
              <h4>
                {signin
                  ? "Don't have an account yet? "
                  : "Already have an account?"}
              </h4>

              {signin ? (
                <h5 onClick={() => setSignin(!signin)}>sign up</h5>
              ) : (
                <h5 onClick={() => setSignin(!signin)}>sign in</h5>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
