import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mt-14 flex-grow">{children}</main>
      <Footer />
    </>
  );
}
