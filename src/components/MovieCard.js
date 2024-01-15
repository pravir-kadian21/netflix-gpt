import React from "react";

const MovieCard = ({ moviePath, handleMovieCardClick }) => {
  if (!moviePath) return;
  return (
    <div
      className="md:w-44 mr-10 w-24 cursor-pointer"
      onClick={handleMovieCardClick}
    >
      <img src={`https://image.tmdb.org/t/p/w500${moviePath}`} alt="" />
    </div>
  );
};

export default MovieCard;
