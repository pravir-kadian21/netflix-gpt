import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";
import { disableLoader, enableLoader } from "../utils/configSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState();
  const language = useSelector((store) => store.config.lang);

  const searchTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(enableLoader());

    const searchQuery = `Act as a movie recommendation system and suggest movies for the query: ${searchText} and only give me names of 5 movies as a comma seperated string. Example result = Koi mil gaya,Gadar,Sholay,Don,Golmal`;
    const results = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });

    const movieResult = results?.choices[0]?.message?.content;
    const movieList = movieResult.split(",");

    const promiseArr = movieList.map((movie) => {
      return searchTmdb(movie);
    });

    const tmdbMovieList = await Promise.all(promiseArr);

    dispatch(
      addGptMovies({ movieNames: movieList, tmdbMovies: tmdbMovieList })
    );

    dispatch(disableLoader());
  };
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12 py-6 px-4 rounded-md"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          className="col-span-9 py-3 px-2 rounded-md mr-4"
          placeholder={lang[language].gptSeachPlaceholder}
          value={searchText}
          onChange={handleSearchChange}
        />
        <button
          className="text-white bg-red-600 col-span-3 rounded-md"
          type="submit"
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
