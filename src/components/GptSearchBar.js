import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  debugger;
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 py-6 px-4 rounded-md">
        <input
          type="text"
          className="col-span-9 py-3 px-2 rounded-md mr-4"
          placeholder={lang[language].gptSeachPlaceholder}
        />
        <button className="text-white bg-red-600 col-span-3 rounded-md">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
