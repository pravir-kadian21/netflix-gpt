export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

export const LANG_OPTIONS_DROPDOWN = [
  { value: "en", display: "English" },
  { value: "hindi", display: "Hindi" },
  { value: "esp", display: "Spanish" },
];

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;
