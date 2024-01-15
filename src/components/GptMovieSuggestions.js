import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { tmdbMovies, gptMovieNames } = useSelector((store) => store.gpt);
  if (gptMovieNames === null) return;
  return (
    <div className="bg-black bg-opacity-80 mt-4">
      {gptMovieNames.map((movie, index) => {
        return (
          <>
            <MovieList
              listTitle={movie}
              movies={tmdbMovies[index]}
              className="mb-4"
            />
          </>
        );
      })}
    </div>
  );
};

export default GptMovieSuggestions;
