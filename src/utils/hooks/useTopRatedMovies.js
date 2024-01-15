import React, { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../moviesSlice";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=3",
      API_OPTIONS
    );
    const json = await response.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};
