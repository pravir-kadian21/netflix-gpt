import React from "react";

const MovieCard = ({ moviePath }) => {
  if (!moviePath) return;
  return (
    <div className="w-56 mr-10 h-40">
      <img
        className="w-56 h-40"
        src={`https://image.tmdb.org/t/p/w500${moviePath}`}
        alt=""
      />
    </div>
  );
};

export default MovieCard;
