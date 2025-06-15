import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGihb } = useContext(AuthContext);

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

  return (
    <div>
      <div className="divider">OR</div>

      {/* Google login */}
      <button onClick={handleGoogleogin}>Google</button>
      <button onClick={handleGithublogin}>Github</button>
    </div>
  );
};

export default SocialLogin;
