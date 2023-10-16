import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ listTitle, movies = [] }) => {
  console.log(movies);

  return (
    <div className="pl-10 pt-6">
      <h1 className="text-2xl font-bold text-white mb-4">{listTitle}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard moviePath={movie?.poster_path} />
          ))}
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
