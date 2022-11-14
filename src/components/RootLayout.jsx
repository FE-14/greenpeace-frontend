import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
