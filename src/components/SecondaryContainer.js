import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-64 relative z-10">
        <MovieList
          listTitle="Now Playing Movies"
          movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          listTitle="Popular Movies"
          movies={movies.popularMovies}
        ></MovieList>
        <MovieList
          listTitle="Top Rated Movies"
          movies={movies.topRatedMovies}
        ></MovieList>
        <MovieList
          listTitle="Upcoming Movies"
          movies={movies.upcomingMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
