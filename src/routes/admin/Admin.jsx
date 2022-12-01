import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks";

export default function Admin() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => {
    if (auth?.token === undefined) {
      navigate("login", { replace: true });
    } else {
      navigate("dashboard", { replace: true });
    }
  }, [pathname]);

  return (
    <HelmetProvider>
      <main className="flex-[2] flex-grow bg-white">
        <Outlet />
      </main>
    </HelmetProvider>
  );
}
