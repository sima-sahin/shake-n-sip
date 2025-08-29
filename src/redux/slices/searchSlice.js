import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: JSON.parse(localStorage.getItem("searchHistory")) || [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearchHistory: (state, action) => {
      const term = action.payload.trim();
      if (!term) return;
      // no repeating records
      state.history = [term, ...state.history.filter((t) => t !== term)];
      // max 20 records of history
      state.history = state.history.slice(0, 20);
      localStorage.setItem("searchHistory", JSON.stringify(state.history));
    },
    clearSearchHistory: (state) => {
      state.history = [];
      localStorage.removeItem("searchHistory");
    },
  },
});

export const { addSearchHistory, clearSearchHistory } = searchSlice.actions;
export default searchSlice.reducer;