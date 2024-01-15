import React, { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../moviesSlice";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=4",
      API_OPTIONS
    );
    const json = await response.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};
