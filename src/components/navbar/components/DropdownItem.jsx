import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DropdownItem({ to, children }) {
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
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
      layout
    >
      <Link
        to={to}
        className="whitespace-nowrap font-medium text-white/[85%] hover:text-white"
      >
        {children}
      </Link>
    </motion.li>
  );
}
