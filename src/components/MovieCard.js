import React from "react";

const MovieCard = ({ moviePath }) => {
  return (
    <div className="w-32 mr-4">
      <img
        className="w-fit"
        src={`https://image.tmdb.org/t/p/w500${moviePath}`}
        alt=""
      />
    </div>
  );
};

export default MovieCard;
