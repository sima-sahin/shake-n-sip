import { createSlice } from "@reduxjs/toolkit";

// Initial state loaded from localStorage
const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || []
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favorites.find(item => item.slug === action.payload.slug)) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(item => item.slug !== action.payload.slug);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
