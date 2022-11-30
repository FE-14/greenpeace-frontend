import { useState } from "react";
import { HiLockClosed, HiUser, HiX } from "react-icons/hi";

export default function Login() {
  const [errorIsOpen, setErrorIsOpen] = useState(false);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-cover bg-no-repeat object-cover">
      <div className="flex flex-col items-center justify-center gap-12 bg-green-gp-50 p-8 backdrop-blur-sm lg:p-12 xl:p-16 2xl:p-20 3xl:p-24">
        <h1 className="font-montserrat text-3xl font-bold text-green-gp-700 md:text-2xl lg:text-3xl">
          Masuk
        </h1>

        <div
          className="w-full items-center gap-6 border-[1px] border-red-600 bg-red-400/20 p-2 md:p-3 lg:p-4"
          style={{
            display: errorIsOpen ? "flex" : "none",
          }}
        >
          <h1>Username atau kata sandi salah.</h1>
          <HiX
            className="h-4 w-4 cursor-pointer text-red-600"
            onClick={() => setErrorIsOpen(false)}
          />
        </div>

        <form className="flex w-full  flex-col gap-14">
          <div className="flex flex-col gap-6">
            <label
              htmlFor="username"
              className="flex items-center gap-4 border-b-[1px] border-current p-2 text-black-gp-200"
            >
              <HiUser className="h-6 w-6" />
              <input
                type="text"
                id="username"
                placeholder="Masukkan username"
                className="w-full bg-transparent text-current placeholder:text-black-gp-200/60 focus:border-0 focus:outline-none"
              />
            </label>
            <label
              htmlFor="password"
              className="flex items-center gap-4 border-b-[1px] border-current p-2 text-black-gp-200"
            >
              <HiLockClosed className="h-6 w-6" />
              <input
                type="password"
                id="password"
                placeholder="Masukkan password"
                className="w-full bg-transparent text-current placeholder:text-black-gp-200/60 focus:border-0 focus:outline-none"
              />
            </label>
          </div>
          <button
            type="submit"
            className="border-[1px] border-green-gp-50 bg-green-gp-700 py-2 px-4 text-white shadow-lg hover:brightness-90 focus:outline focus:outline-1 focus:outline-green-gp-700/90"
            onClick={(event) => {
              event.preventDefault();
              setErrorIsOpen(true);
            }}
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
