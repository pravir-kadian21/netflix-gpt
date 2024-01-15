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
import LoaderComponent from "./Loader";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGPTSearchView = useSelector((store) => store.gpt.showGptSearch);

  const loading = useSelector((store) => store.config.loading);

  return (
    <div className="overflow-x-hidden">
      <LoaderComponent loading={loading} />
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
