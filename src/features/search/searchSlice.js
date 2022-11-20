import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchValue: (state, actions) => {
      state.searchValue = actions.payload;
    },
  },
});

export const { updateSearchValue } = searchSlice.actions;

const searchReducer = searchSlice.reducer;

export default searchReducer;
