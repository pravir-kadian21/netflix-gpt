import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import LoaderComponent from "./Loader";
import { useSelector } from "react-redux";

const GptSearchPage = () => {
  const loading = useSelector((store) => store.config.loading);
  return (
    <div>
      <LoaderComponent loading={loading} />
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-auto"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-banner"
        />
      </div>
      <div className="pt-[30%] md:pt-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;
