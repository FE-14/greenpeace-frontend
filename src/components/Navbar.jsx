import { useEffect, useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineMinus,
  HiOutlineSearch,
  HiOutlineX,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

import { greenpeaceLogoWhite } from "../assets";

export default function Navbar({ forErrorElement }) {
  const [isUnderLargeSizeWidth, setIsUnderLargeSizeWidth] = useState(
    window.innerWidth < 1024
  );

  const [navbarIsOpen, setNavbarIsOpen] = useState(!isUnderLargeSizeWidth);

  const ulVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: isUnderLargeSizeWidth ? -1000 : 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.25,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: -1000,
      transition: {
        duration: 0.3,
      },
    },
  };

  const liVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const handleResize = () => {
    setIsUnderLargeSizeWidth(window.innerWidth < 1024);
    setNavbarIsOpen(!isUnderLargeSizeWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <header
      className={classNames(
        "basic-padding z-50 w-full bg-green-gp-800/[35%] py-4 font-montserrat backdrop-blur-sm",
        {
          fixed: !forErrorElement,
          relative: forErrorElement,
        }
      )}
    >
      <nav className="flex items-center justify-between">
        <figure>
          <Link to="/">
            <img
              src={greenpeaceLogoWhite}
              alt="Greenpeace Logo"
              className="h-6 lg:h-8"
            />
          </Link>
        </figure>
        <button
          type="button"
          id="toggle-navbar"
          onClick={() => setNavbarIsOpen((prevCondition) => !prevCondition)}
        >
          <HiOutlineMenuAlt3 className="h-auto w-6 text-white lg:hidden lg:w-8" />
        </button>
        <AnimatePresence>
          {navbarIsOpen && (
            <motion.ul
              className="absolute top-0 right-0 left-0 flex h-screen flex-col items-center justify-center gap-12 bg-green-gp-800/80 backdrop-blur-sm lg:static lg:h-auto lg:w-1/2 lg:flex-row lg:justify-end lg:gap-8 lg:bg-transparent lg:backdrop-blur-none"
              variants={ulVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                type: "tween",
              }}
            >
              <NavbarLink
                to="/"
                isUnderLargeSizeWidth={isUnderLargeSizeWidth}
                setNavbarIsOpen={setNavbarIsOpen}
                variants={liVariants}
              >
                Beranda
              </NavbarLink>
              <NavbarLink
                to="/articles"
                isUnderLargeSizeWidth={isUnderLargeSizeWidth}
                setNavbarIsOpen={setNavbarIsOpen}
                variants={liVariants}
              >
                Artikel
              </NavbarLink>

              <motion.li
                className="mt-12 md:ml-12 lg:mt-0"
                variants={liVariants}
              >
                <SearchBar />
              </motion.li>
              <li className="relative top-20 lg:hidden">
                <button type="button">
                  <HiOutlineX
                    className="h-12 w-12 text-white"
                    id="close-navbar"
                    onClick={() => setNavbarIsOpen(false)}
                  />
                </button>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

function NavbarLink({
  to,
  isUnderLargeSizeWidth,
  setNavbarIsOpen,
  variants,
  children,
}) {
  return (
    <motion.li
      className="group text-2xl font-bold text-white hover:text-white/80 lg:mx-2 lg:text-lg"
      variants={variants}
    >
      <Link
        to={to}
        className="text-current"
        onClick={() => isUnderLargeSizeWidth && setNavbarIsOpen(false)}
      >
        {children}
        <hr className="h-[1px] w-1/2 border-0 bg-current duration-200 group-hover:w-full" />
      </Link>
    </motion.li>
  );
}

function SearchBar() {
  const disabled = true;

  return (
    <form
      className={classNames({
        "opacity-40": disabled,
        "opacity-100": !disabled,
      })}
    >
      <label
        htmlFor="search-bar"
        className={classNames("flex items-center gap-2", {
          "cursor-not-allowed": disabled,
        })}
      >
        <HiOutlineSearch className="h-6 w-6 text-white" />
        <HiOutlineMinus className="h-6 w-6 rotate-90 text-white" />
        <input
          type="search"
          id="search-bar"
          className={classNames(
            "form-input border-white bg-transparent text-white placeholder:text-sm placeholder:text-white/60 focus:border-current focus:ring-white/60 md:border-none md:placeholder:text-base md:focus:ring-0",
            {
              "cursor-not-allowed": disabled,
            }
          )}
          placeholder="Telusuri ..."
          disabled={disabled}
        />
      </label>
    </form>
  );
}

Navbar.propTypes = {
  forErrorElement: PropTypes.bool,
};

Navbar.defaultProps = {
  forErrorElement: false,
};
