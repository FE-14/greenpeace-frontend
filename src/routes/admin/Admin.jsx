import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("adminToken") === null) {
      navigate("login");
    }
  }, []);

  return (
    <main className="flex-[2] flex-grow bg-white">
      <Outlet />
    </main>
  );
}
