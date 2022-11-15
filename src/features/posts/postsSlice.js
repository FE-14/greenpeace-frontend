import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  postsData: [],
  isLoading: true,
};

// thunk function (async)
export const getPostsData = createAsyncThunk(
  "posts/getPostsData",
  async (URL, thunkAPI) => {
    try {
      const response = await axios(URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostsData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPostsData.fulfilled, (state, action) => {
      state.postsData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPostsData.rejected, (state, action) => {
      state.isLoading = false;
      throw new Error(action.payload);
    });
  },
});

const postsReducer = postsSlice.reducer;

export default postsReducer;
