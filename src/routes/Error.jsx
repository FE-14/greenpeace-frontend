import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";

import { Footer, Navbar } from "../components";

export default function Error() {
  const errorResponse = useRouteError();

  return (
    <>
      <Navbar forErrorElement />
      <main className="flex flex-grow items-center justify-center">
        <div className="basic-padding relative flex min-h-[calc(100vh/2)] w-full flex-col items-center justify-center font-montserrat">
          {isRouteErrorResponse(errorResponse) && (
            <>
              <h1 className="absolute -z-10 text-[140px] font-bold text-black-gp-50/[15%] xs:text-[180px] sm:text-[200px] md:text-[250px] lg:text-[290px]">
                404
              </h1>
              <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center text-black-gp-100 xs:mt-16">
                <h2 className="font-semibold xs:text-lg">
                  Ups, kami tidak bisa menemukan yang kamu cari!
                </h2>
                <h2 className="text-xs font-medium xs:text-base">
                  Halaman tersebut mungkin sudah punah...
                </h2>
                <Link to="/" className="mt-2 xs:mt-5">
                  <motion.button
                    type="button"
                    className="bg-submarine-gp-500 py-2 px-4 text-green-gp-50"
                    whileTap={{
                      scale: 0.8,
                    }}
                    whileHover={{
                      filter: "brightness(0.9)",
                    }}
                  >
                    {" "}
                    Kembali ke beranda
                  </motion.button>
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
