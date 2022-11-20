import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateQueryValue: (state, actions) => {
      state.query = actions.payload;
    },
  },
});

export const { updateQueryValue } = searchSlice.actions;

const searchReducer = searchSlice.reducer;

export default searchReducer;
