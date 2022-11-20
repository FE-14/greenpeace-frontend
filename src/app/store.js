import { configureStore } from "@reduxjs/toolkit";

import homepageReducer from "../features/homepage/homapageSlice";
import postsReducer from "../features/posts/postsSlice";
import searchReducer from "../features/search/searchSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    homepage: homepageReducer,
    search: searchReducer,
  },
});

export default store;
