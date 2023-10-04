import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [formType, setFormType] = useState("SignIn");

  const handleChangeFormType = () => {
    if (formType === "SignIn") setFormType("SignUp");
    else setFormType("SignIn");
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-banner"
        />
      </div>
      <form className="relative w-1/4 bg-black m-auto top-44 rounded px-16 pt-12 bg-opacity-90">
        <div className="text-white text-3xl mb-8">
          {formType === "SignIn" ? "Sign In" : "Sign Up"}
        </div>
        {formType === "SignUp" && (
          <input
            className="w-full px-4 py-3 mb-4 rounded bg-neutral-700 text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="w-full px-4 py-3 mb-4 rounded bg-neutral-700 text-white"
          type="text"
          placeholder="Email"
        />
        <input
          className="w-full px-4 py-3 mb-10 bg-neutral-700 rounded"
          type="text"
          placeholder="Password"
        />
        <button className="bg-red-600 text-white w-full py-3 rounded mb-10">
          {formType === "SignIn" ? "Sign In" : "Sign Up"}
        </button>

        <div className="pb-16">
          <span className="text-neutral-500">
            {formType === "SignIn" ? "New to Netflix?" : "Already a User"}
          </span>
          <span
            className="text-white cursor-pointer"
            onClick={handleChangeFormType}
          >
            {" "}
            {formType === "SignIn" ? "Sign Up now." : "Sign In now."}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
