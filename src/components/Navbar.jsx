import { useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineMinus,
  HiOutlineSearch,
  HiOutlineX,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { greenpeaceLogoWhite } from "../assets";

export default function Navbar() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const ulVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: -1000,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "tween",
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: -1000,
    },
  };
  return (
    <header className="basic-padding fixed w-full bg-green-gp-800/[55%] py-4 font-montserrat backdrop-blur-md">
      <nav className="flex items-center justify-between">
        <figure>
          <Link to="/">
            <img
              src={greenpeaceLogoWhite}
              alt="Greenpeace Logo"
              className="h-6"
            />
          </Link>
        </figure>
        <button
          type="button"
          id="toggle-navbar"
          onClick={() => setNavbarIsOpen((prevCondition) => !prevCondition)}
        >
          <HiOutlineMenuAlt3 className="h-6 w-6 text-white" />
        </button>
        <AnimatePresence>
          {navbarIsOpen && (
            <motion.ul
              className="absolute top-0 right-0 left-0 flex h-screen flex-col items-center justify-center gap-12 bg-green-gp-800/80 backdrop-blur-sm"
              variants={ulVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <li className="group text-2xl font-bold text-white hover:text-white/80">
                <Link to="/" className="text-current">
                  Article
                  <hr className="h-[1px] w-1/2 border-0 bg-current duration-200 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <SearchBar />
              </li>
              <HiOutlineX
                className="absolute bottom-[15%] h-12 w-12 text-white"
                id="close-navbar"
                onClick={() => setNavbarIsOpen(false)}
              />
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

function SearchBar() {
  return (
    <form className="">
      <label htmlFor="search-bar" className="flex items-center gap-2">
        <HiOutlineSearch className="h-6 w-6 text-white" />
        <HiOutlineMinus className="h-6 w-6 rotate-90 text-white" />
        <input
          type="search"
          id="search-bar"
          className="form-input border-white bg-transparent text-white placeholder:text-sm placeholder:text-white/80  focus:border-current focus:ring-white/60"
          placeholder="Telusuri ..."
        />
      </label>
    </form>
  );
}
