import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Article, Articles, Homepage } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "articles/:articleId",
        element: <Article />,
      },
    ],
  },
]);

export default router;
