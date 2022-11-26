// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="relative flex-grow">{children}</main>
      <Footer />
    </>
  );
}

RootLayout.propType = {
  children: PropTypes.node.isRequired,
};
