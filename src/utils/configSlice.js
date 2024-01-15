import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    loading: false,
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    enableLoader: (state) => {
      state.loading = true;
    },
    disableLoader: (state) => {
      state.loading = false;
    },
  },
});

export const { changeLang, enableLoader, disableLoader } = configSlice.actions;

export default configSlice.reducer;
