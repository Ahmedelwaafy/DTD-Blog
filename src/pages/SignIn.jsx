import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };
  const [signin, setSignin] = useState(true);
  return (
    <section className="container">
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
          <form target="_blank" onSubmit={handleSubmit(onSubmit)} method="POST">
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

            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="on"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password && (
                <p>
                  {errors.password.type === "required" &&
                    "This field is required."}
                </p>
              )}
            </div>
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
