import React, { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../moviesSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=2",
      API_OPTIONS
    );
    const json = await response.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};
