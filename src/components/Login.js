import React, { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { validateFormData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [formType, setFormType] = useState("SignIn");
  const [errors, setErrors] = useState({});
  const [authenticationError, setAuthenticationError] = useState();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleChangeFormType = () => {
    if (formType === "SignIn") setFormType("SignUp");
    else setFormType("SignIn");
  };

  const handleFormSubmit = () => {
    const formError = {
      ...validateFormData(
        formType,
        email.current.value,
        password.current.value,
        name?.current?.value
      ),
    };
    setErrors(formError);
    if (!Object.keys(formError).length) {
      if (formType === "SignUp") {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            setAuthenticationError();
            updateProfile(auth.currentUser, {
              displayName: name?.current?.value,
            })
              .then(() => {
                const { currentUser } = auth;
                const { uid, displayName, email } = currentUser;
                dispatch(addUser({ uid, displayName, email }));
              })
              .catch((error) => {});
          })
          .catch((error) => {
            const errorMessage = error.message;
            setAuthenticationError(errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            setAuthenticationError();
            const user = userCredential.user;
            const { uid, displayName, email } = user;
            dispatch(addUser({ uid, displayName, email }));
          })
          .catch((error) => {
            const errorMessage = error.message;
            setAuthenticationError(errorMessage);
          });
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-auto"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-banner"
        />
      </div>
      <form className="relative w-full md:w-1/4 bg-black m-auto top-44 rounded px-16 pt-12 bg-opacity-90">
        <div className="text-white text-3xl mb-8">
          {formType === "SignIn" ? "Sign In" : "Sign Up"}
        </div>
        {formType === "SignUp" && (
          <>
            <input
              className="w-full px-4 py-3 rounded bg-neutral-700 text-white"
              type="text"
              placeholder="Full Name"
              ref={name}
            />
            <div className="text-amber-600 mb-5 text-xs pt-2">
              {errors?.name}
            </div>
          </>
        )}
        <input
          className="w-full px-4 py-3 rounded bg-neutral-700 text-white"
          type="text"
          placeholder="Email"
          ref={email}
        />
        <div className="text-amber-600 mb-5 text-xs pt-2">{errors?.email}</div>
        <input
          className="w-full px-4 py-3 bg-neutral-700 rounded text-white"
          type="text"
          placeholder="Password"
          ref={password}
        />
        <div className="text-amber-600 mb-8 text-xs pt-2">
          {errors?.password}
        </div>
        <button
          className="bg-red-600 text-white w-full py-3 mb-2 rounded"
          onClick={handleFormSubmit}
          type="button"
        >
          {formType === "SignIn" ? "Sign In" : "Sign Up"}
        </button>
        <div className="text-amber-600 mb-10 text-xs">
          {authenticationError}
        </div>

        <div className="pb-16">
          <span className="text-neutral-500">
            {formType === "SignIn" ? "New to Netflix?" : "Already a User?"}
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
