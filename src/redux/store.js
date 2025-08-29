import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favoritesSlice";
import languageReducer from "./slices/languageSlice";
import searchReducer from "./slices/searchSlice"

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    language: languageReducer,
    search: searchReducer,
  }
});