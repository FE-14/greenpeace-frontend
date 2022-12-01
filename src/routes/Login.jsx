import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CgSpinner } from "react-icons/cg";
import { HiOutlineLockClosed, HiOutlineMail, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { useAuth } from "../hooks";
import { axios } from "../libs";

export default function Login() {
  const { setAuth, auth } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    (async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.post(
          `/login`,
          JSON.stringify({ email, password }),
          {
            headers: {
              "Content-Type": "application/json",
              withCredentials: true,
            },
          }
        );

        setAuth({
          email,
          password,
          token: response?.data?.accessToken,
        });

        navigate("/admin/dashboard", { replace: true });
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  };

  useEffect(() => {
    if (auth?.token) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Masuk | Greenpeace Indonesia</title>
      </Helmet>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-green-gp-50/20 bg-cover bg-no-repeat object-cover">
        <div className="flex flex-col items-center justify-center gap-12 bg-green-gp-50 p-8 backdrop-blur-sm lg:p-12 xl:p-16 2xl:p-20 3xl:p-24">
          <h1 className="font-montserrat text-3xl font-bold text-green-gp-700 md:text-2xl lg:text-3xl">
            Masuk
          </h1>

          <div
            className="w-full items-center gap-6 border-[1px] border-red-600 bg-red-400/20 p-2 md:p-3 lg:p-4"
            style={{
              display: isError ? "flex" : "none",
            }}
          >
            <h1>Password atau kata sandi salah.</h1>
            <HiX
              className="h-4 w-4 cursor-pointer text-red-600"
              onClick={() => setIsError(false)}
            />
          </div>

          <form className="flex w-full flex-col gap-14" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <label
                htmlFor="username"
                className="flex items-center gap-4 border-b-[1px] border-current p-2 text-black-gp-200"
              >
                <HiOutlineMail className="h-6 w-6" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="admin@example.com"
                  className="w-full bg-transparent text-current placeholder:text-black-gp-200/60 focus:border-0 focus:outline-none"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={isLoading}
                  required
                />
              </label>
              <label
                htmlFor="password"
                className="flex items-center gap-4 border-b-[1px] border-current p-2 text-black-gp-200"
              >
                <HiOutlineLockClosed className="h-6 w-6" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Masukkan password"
                  className="w-full bg-transparent text-current placeholder:text-black-gp-200/60 focus:border-0 focus:outline-none"
                  value={password}
                  required
                  onChange={(event) => setPassword(event.target.value)}
                  disabled={isLoading}
                />
              </label>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-4 border-[1px] border-green-gp-50 bg-green-gp-700 py-2 px-4 text-lg text-white shadow-lg hover:brightness-90 focus:outline focus:outline-1 focus:outline-green-gp-700/90 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:brightness-100"
              disabled={isLoading}
            >
              <CgSpinner
                className={classNames("h-6 w-6 animate-spin", {
                  block: isLoading,
                  hidden: !isLoading,
                })}
              />
              Masuk
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
