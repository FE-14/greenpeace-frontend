import { createBrowserRouter } from "react-router-dom";

import { Root } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export default router;
