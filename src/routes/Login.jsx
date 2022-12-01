import { useState } from "react";
import { HiOutlineLockClosed, HiOutlineMail, HiX } from "react-icons/hi";
import axios from "axios";

export default function Login() {
  const URL = import.meta.env.VITE_API_URL;
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
        const response = await axios.post(`${URL}/login`, { email, password });
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  };

  return (
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

        <form className="flex w-full  flex-col gap-14" onSubmit={handleSubmit}>
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
                className="w-full bg-transparent text-current placeholder:text-black-gp-200/60  focus:border-0 focus:outline-none"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
              />
            </label>
          </div>
          <button
            type="submit"
            className="border-[1px] border-green-gp-50 bg-green-gp-700 py-2 px-4 text-white shadow-lg hover:brightness-90 focus:outline focus:outline-1 focus:outline-green-gp-700/90 disabled:opacity-50"
            disabled={isLoading}
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
