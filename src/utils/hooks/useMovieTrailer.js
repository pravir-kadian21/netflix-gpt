import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addTrailerKey } from "../moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await response.json();
    const allTrailers = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = allTrailers ? allTrailers[0] : json?.results[0];
    const { key } = trailer;
    dispatch(addTrailerKey(key));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
