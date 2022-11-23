import { useEffect, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import DropdownItem from "./DropdownItem";

export default function NavbarDropdown({
  items,
  isUnderLargeSizeWidth,
  setNavbarIsOpen,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.button
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="group relative flex flex-col gap-2 whitespace-nowrap py-1 px-2 text-current focus:outline focus:outline-1 focus:outline-green-gp-400/20 lg:mx-2 lg:text-lg"
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      whileTap={{ scale: 0.97 }}
    >
      <div className="flex items-center">
        {children}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <HiOutlineChevronDown className="h-6 w-6" />
        </motion.div>
      </div>

      <motion.ul
        className="left-0 right-0 top-[80%] hidden w-full flex-col gap-3 border-white/20 p-4 lg:absolute lg:mt-5 lg:flex lg:w-max lg:border-[1px] lg:bg-green-gp-800/[90%]"
        variants={{
          open: {
            scale: 1,
            display: "flex",
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.5,
              delayChildren: 0.2,
              staggerChildren: 0.05,
            },
          },
          closed: {
            scale: 0,
            opacity: 0,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        {items.map((item) => (
          <DropdownItem
            {...item}
            setNavbarIsOpen={setNavbarIsOpen}
            isUnderLargeSizeWidth={isUnderLargeSizeWidth}
            key={item.children}
          />
        ))}
      </motion.ul>
    </motion.button>
  );
}
