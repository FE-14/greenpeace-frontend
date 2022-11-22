export default function NavbarLi({ children }) {
  return (
    <li className="flex items-center border-b-[1px] border-white/20 py-2 text-lg font-medium text-white hover:text-white/80 lg:border-none">
      {children}
    </li>
  );
}
