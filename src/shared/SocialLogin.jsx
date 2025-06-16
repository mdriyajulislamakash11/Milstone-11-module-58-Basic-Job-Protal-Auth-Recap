import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGihb, signInWithFacebook } = useContext(AuthContext);

  const handleGoogleogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithublogin = () => {
    signInWithGihb()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

//   facebook
  const handleFacebooklogin = () => {
    signInWithFacebook()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="divider">OR</div>

      {/* Google login */}
      <button className="btn" onClick={handleGoogleogin}><FaGoogle /></button>
      <button className="btn" onClick={handleGithublogin}><FaGithub /></button>
      <button className="btn" onClick={handleFacebooklogin}><FaFacebook /></button>
    </div>
  );
};

export default SocialLogin;
