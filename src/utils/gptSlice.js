import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    tmdbMovies: null,
    gptMovieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      state.tmdbMovies = action.payload?.tmdbMovies;
      state.gptMovieNames = action.payload?.movieNames;
    },
  },
});

export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;

export default gptSlice.reducer;
