import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { getPostsData } from "./features/posts/postsSlice";
import { Root } from "./routes";

function App() {
  const dispatch = useDispatch();
  const URL = import.meta.env.VITE_POSTS_API_1;

  useEffect(() => {
    dispatch(getPostsData(URL));
  }, []);

  return (
    <HelmetProvider>
      <Root>
        <ScrollRestoration />
        <Outlet />
      </Root>
    </HelmetProvider>
  );
}

export default App;
