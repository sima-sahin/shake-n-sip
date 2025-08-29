import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../i18n.js";

const initialState = {
  lang: localStorage.getItem("language") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("language", action.payload);
      i18n.changeLanguage(action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;