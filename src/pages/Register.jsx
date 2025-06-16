import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerLottieData from "../assets/loti_register.json";
import { AuthContext } from "../Auth/AuthProvider";
import SocialLogin from "../shared/SocialLogin";
import { useLocation } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation()
  console.log("in register", location)

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // parword validation
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      return alert("Invalid password.");
    }
    console.log({ email, password });


    // create user authentications
    createUser(email, password)
    .then(result => {
        console.log(result.user)
    })
    .catch(error => {
        console.log(error.message)
    })


  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-80">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl my-5 font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
