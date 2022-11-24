import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

import { greenpeaceLogoWhite } from "../../assets";

import { NavbarDropdown, NavbarLi, NavbarLink, SearchBar } from "./components";

export default function Navbar({ forErrorElement }) {
  const { pathname } = useLocation();
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

  useEffect(() => {
    if (isUnderLargeSizeWidth) {
      setNavbarIsOpen(false);
    }
  }, [pathname]);

  return (
    <header
      className={classNames(
        "basic-padding-navbar z-50 w-full bg-green-gp-800/[75%] py-4 font-montserrat backdrop-blur-sm",
        {
          fixed: !forErrorElement,
          relative: forErrorElement,
        }
      )}
    >
      <nav className="flex items-center justify-between">
        <figure>
          <Link
            to="/"
            className="focus:outline focus:outline-1 focus:outline-green-gp-400/20"
          >
            <img
              src={greenpeaceLogoWhite}
              alt="Greenpeace Logo"
              className="h-6 lg:h-8"
            />
          </Link>
        </figure>
        <div className="flex items-center justify-center gap-4 lg:gap-20">
          <button
            type="button"
            id="toggle-navbar"
            onClick={() => setNavbarIsOpen((prevCondition) => !prevCondition)}
            className="order-3 focus:outline focus:outline-1 focus:outline-green-gp-400/20 lg:hidden"
          >
            {!navbarIsOpen && (
              <HiOutlineMenuAlt3 className="h-auto w-6 text-white lg:w-8" />
            )}
            {navbarIsOpen && <HiOutlineX className="h-auto w-6 text-white" />}
          </button>

          <AnimatePresence>
            {navbarIsOpen && (
              <motion.ul
                className="basic-padding absolute bottom-0 top-[100%] left-0 z-50 flex h-screen w-full flex-col gap-4 bg-green-gp-800 py-8 backdrop-blur-sm lg:static lg:h-auto  lg:flex-row lg:justify-end lg:gap-8 lg:bg-transparent lg:p-0 lg:py-0 lg:backdrop-blur-none"
                variants={ulVariants}
                initial={isUnderLargeSizeWidth ? "hidden" : "visible"}
                animate="visible"
                exit="exit"
                transition={{
                  type: "tween",
                }}
              >
                <NavbarLi>
                  <NavbarDropdown
                    items={[
                      {
                        children: "Tentang Kami",
                        to: "/about",
                      },
                      {
                        children: "Sejarah Greenpeace",
                        to: "/history",
                      },
                      {
                        children: "Kemenangan Greenpeace",
                        to: "/our-victory",
                      },
                    ]}
                    setNavbarIsOpen={setNavbarIsOpen}
                    isUnderLargeSizeWidth={isUnderLargeSizeWidth}
                  >
                    Kenali Greenpeace
                  </NavbarDropdown>
                </NavbarLi>

                <NavbarLi>
                  <NavbarLink
                    to="/articles"
                    isUnderLargeSizeWidth={isUnderLargeSizeWidth}
                    setNavbarIsOpen={setNavbarIsOpen}
                  >
                    Artikel
                  </NavbarLink>
                </NavbarLi>
              </motion.ul>
            )}
          </AnimatePresence>
          <SearchBar isUnderLargeSizeWidth={isUnderLargeSizeWidth} />
        </div>
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
