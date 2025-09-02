import { createSlice } from "@reduxjs/toolkit";
import cocktails from "../../data/cocktails";

const initialState = {
  // For new selection that are not applied yet
  draft: {
    categories: [],
    glasses: [],
    alcoholLevels: [],
    tasteProfiles: [],
  },
  // For already selected filters
  applied: {
    categories: [],
    glasses: [],
    alcoholLevels: [],
    tasteProfiles: [],
  },
  filteredCocktails: [],
  loading: false,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleDraftFilter: (state, action) => {
      const { key, value } = action.payload;
      const arr = state.draft[key];
      if (arr.includes(value)) {
        state.draft[key] = arr.filter((v) => v !== value);
      } else {
        state.draft[key].push(value);
      }
    },
    applyFilters: (state) => {
      state.applied = { ...state.draft };
      state.loading = true;

      // FILTERING
      let result = cocktails;
      const { categories, glasses, alcoholLevels, tasteProfiles } = state.applied;

      if (categories.length) {
        result = result.filter((c) => categories.includes(c.category));
      }
      if (glasses.length) {
        result = result.filter((c) => glasses.includes(c.glass));
      }
      if (alcoholLevels.length) {
        result = result.filter((c) => alcoholLevels.includes(c.alcoholLevel));
      }
      if (tasteProfiles.length) {
        result = result.filter((c) =>
          tasteProfiles.some((tp) => c.tasteProfile.includes(tp))
        );
      }

      state.filteredCocktails = result;
    },
    filtersLoaded: (state) => {
      state.loading = false;
    },
    clearDraft: (state) => {
      state.draft = {
        categories: [],
        glasses: [],
        alcoholLevels: [],
        tasteProfiles: [],
      };
    },
  },
});

export const { toggleDraftFilter, applyFilters, filtersLoaded, clearDraft } = filterSlice.actions;
export default filterSlice.reducer;