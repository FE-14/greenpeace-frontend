import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavbarLink({
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
        className="py-1 px-2 text-current"
        onClick={() => isUnderLargeSizeWidth && setNavbarIsOpen(false)}
      >
        {children}
      </Link>
    </motion.li>
  );
}
