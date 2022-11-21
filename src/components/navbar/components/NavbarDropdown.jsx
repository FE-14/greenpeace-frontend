import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { motion } from "framer-motion";

import DropdownItem from "./DropdownItem";

export default function NavbarDropdown({ items, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative"
    >
      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 whitespace-nowrap py-1 px-2 text-2xl font-bold text-white hover:text-white/80 lg:mx-2 lg:text-lg"
      >
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
      </motion.button>
      <motion.ul
        className="flex w-full flex-col gap-3 p-4 lg:absolute lg:mt-5 lg:bg-green-gp-800/[55%]"
        variants={{
          open: {
            display: "flex",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.5,
              delayChildren: 0.2,
              staggerChildren: 0.05,
            },
          },
          closed: {
            display: "none",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        layout
      >
        {items.map((item) => (
          <DropdownItem {...item} key={item.children} />
        ))}
      </motion.ul>
    </motion.div>
  );
}
