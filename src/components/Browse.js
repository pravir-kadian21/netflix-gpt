import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../utils/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../utils/hooks/usePopularMovies";
import { useTopRatedMovies } from "../utils/hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../utils/hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGPTSearchView = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="overflow-x-hidden">
      <Header />
      {showGPTSearchView ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
