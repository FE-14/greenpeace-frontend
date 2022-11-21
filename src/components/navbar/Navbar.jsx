import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

import { greenpeaceLogoWhite } from "../../assets";

import { NavbarDropdown, NavbarLink, SearchBar } from "./components";

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
        "basic-padding-navbar z-50 w-full bg-green-gp-800/[35%] py-4 font-montserrat backdrop-blur-sm",
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
              className="absolute top-0 right-0 left-0 flex h-screen flex-col items-center justify-center gap-12 bg-green-gp-800/90 backdrop-blur-sm lg:static lg:h-auto lg:w-1/2 lg:flex-row lg:justify-end lg:gap-4 lg:bg-transparent lg:backdrop-blur-none"
              variants={ulVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                type: "tween",
              }}
            >
              <motion.li
                className="mt-12 md:ml-12 lg:mt-0"
                variants={liVariants}
              >
                <NavbarDropdown
                  items={[
                    {
                      children: "Tentang Kami",
                      to: "/tentang",
                    },
                    {
                      children: "Sejarah Greenpeace",
                      to: "/sejarah",
                    },
                    {
                      children: "Kemenangan Greenpeace",
                      to: "/kemenangan",
                    },
                  ]}
                >
                  Kenali Greenpeace
                </NavbarDropdown>
              </motion.li>

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
                <SearchBar
                  isUnderLargeSizeWidth={isUnderLargeSizeWidth}
                  setNavbarIsOpen={setNavbarIsOpen}
                />
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

Navbar.propTypes = {
  forErrorElement: PropTypes.bool,
};

Navbar.defaultProps = {
  forErrorElement: false,
};
