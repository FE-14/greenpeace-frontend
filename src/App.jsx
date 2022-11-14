import { Outlet } from "react-router-dom";

import { Root } from "./routes";

function App() {
  return (
    <Root>
      <Outlet />
    </Root>
  );
}

export default App;
