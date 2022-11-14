import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Homepage } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
