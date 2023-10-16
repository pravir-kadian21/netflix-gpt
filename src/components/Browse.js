import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../utils/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../utils/hooks/usePopularMovies";
import { useTopRatedMovies } from "../utils/hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../utils/hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="overflow-x-hidden">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
