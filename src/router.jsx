import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Article, Homepage } from "./routes";

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
        path: "article/:articleId",
        element: <Article />,
      },
    ],
  },
]);

export default router;
