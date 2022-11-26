import { HelmetProvider } from "react-helmet-async";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { Root } from "./routes";

const helmetContext = {};

function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <Root>
        <ScrollRestoration
          getKey={(location) => {
            const paths = ["/articles"];
            return paths.includes(location.pathname)
              ? location.pathname
              : location.key;
          }}
        />
        <Outlet />
      </Root>
    </HelmetProvider>
  );
}

export default App;
