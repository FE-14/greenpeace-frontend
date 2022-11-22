import { Link } from "react-router-dom";

export default function NavbarLink({
  to,
  isUnderLargeSizeWidth,
  setNavbarIsOpen,
  children,
}) {
  return (
    <Link
      to={to}
      className="py-1 px-2 text-current focus:outline focus:outline-1 focus:outline-green-gp-400/20 lg:py-0"
      onClick={() => isUnderLargeSizeWidth && setNavbarIsOpen(false)}
    >
      {children}
    </Link>
  );
}
