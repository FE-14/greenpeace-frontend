import { configureStore } from "@reduxjs/toolkit";

import homepageReducer from "../features/homepage/homapageSlice";
import postsReducer from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    homepage: homepageReducer,
  },
});

export default store;
