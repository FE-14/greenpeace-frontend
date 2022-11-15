import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { getPostsData } from "./features/posts/postsSlice";
import { Root } from "./routes";

function App() {
  const dispatch = useDispatch();
  const URL = import.meta.env.VITE_POSTS_API_1;

  useEffect(() => {
    dispatch(getPostsData(URL));
  }, []);

  return (
    <Root>
      <Outlet />
    </Root>
  );
}

export default App;
