import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DropdownItem({
  to,
  isUnderLargeSizeWidth,
  setNavbarIsOpen,
  children,
}) {
  const itemVariants = {
    open: {
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };
  return (
    <motion.li
      variants={itemVariants}
      key={children}
      className="w-max text-white"
    >
      <Link
        to={to}
        className="whitespace-nowrap p-2 text-sm font-medium text-white/[70%] hover:text-white focus:outline focus:outline-1 focus:outline-green-gp-400/20"
        onClick={() => isUnderLargeSizeWidth && setNavbarIsOpen(false)}
      >
        {children}
      </Link>
    </motion.li>
  );
}
