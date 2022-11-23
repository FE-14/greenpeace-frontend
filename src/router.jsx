import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import {
  Articles,
  DetailArticle,
  Error,
  History,
  Homepage,
  Search,
} from "./routes";

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
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "sejarah",
        element: <History />,
      },
    ],
  },
]);

export default router;
