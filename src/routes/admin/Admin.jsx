import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet, useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("adminToken") === null) {
      navigate("login");
    }
  }, []);

  return (
    <HelmetProvider>
      <main className="flex-[2] flex-grow bg-white">
        <Outlet />
      </main>
    </HelmetProvider>
  );
}
