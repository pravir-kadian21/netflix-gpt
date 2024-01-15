import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { addGptMovies } from "../utils/gptSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addGptMovies({ movieNames: null, tmdbMovies: null }));
  }, []);
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  debugger;
  if (!movies) return;
  const { id, title, overview } = movies[0];
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
