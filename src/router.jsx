import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Articles, DetailArticle, Error, Homepage } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
        element: <DetailArticle />,
      },
    ],
  },
]);

export default router;
