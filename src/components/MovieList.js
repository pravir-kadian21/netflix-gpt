import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MovieInfo from "./MovieInfo";

const MovieList = ({ listTitle, movies = [] }) => {
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});

  if (!movies) return;

  const handleMovieCardClick = (movie) => () => {
    setShowMovieInfo(true);
    setMovieInfo(movie);
  };

  return (
    <div className="pl-10 pt-6">
      <h1 className="text-2xl font-bold text-white mb-4">{listTitle}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard
              moviePath={movie?.poster_path}
              handleMovieCardClick={handleMovieCardClick(movie)}
            />
          ))}
          {/* <MovieCard /> */}
          {showMovieInfo && (
            <MovieInfo
              open={showMovieInfo}
              setOpen={setShowMovieInfo}
              movie={movieInfo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
