import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link, ScrollRestoration } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

import { greenpeaceLogoWhite, whiteLineIllustration } from "../assets";

export default function Footer() {
  const contacts = [
    {
      title: "Facebook",
      url: "https://www.facebook.com/GreenpeaceIndonesia/",
      icon: <AiFillFacebook className="h-6 w-6  hover:brightness-75" />,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/greenpeaceid/",
      icon: <AiFillInstagram className="h-6 w-6  hover:brightness-75" />,
    },
    {
      title: "Youtube",
      url: "https://www.youtube.com/greenpeaceindonesia",
      icon: <AiFillYoutube className="h-6 w-6  hover:brightness-75" />,
    },
    {
      title: "Twitter",
      url: "https://twitter.com/greenpeaceid",
      icon: <AiOutlineTwitter className="h-6 w-6  hover:brightness-75" />,
    },
  ];

  return (
    <footer className="flex w-full flex-col items-center bg-green-gp-900 py-8">
      <ScrollRestoration />
      <div className="flex w-full flex-col items-center justify-between gap-12 p-12 lg:flex-row">
        <section className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="flex flex-col items-center justify-center gap-4 p-4 lg:items-start">
            <h2 className="border-b-2 border-b-green-gp-400 font-montserrat text-xl font-bold text-green-400 md:text-2xl">
              Kenali Greenpeace
            </h2>
            <ul className="flex items-center gap-4 text-center text-white md:gap-8 lg:flex-col lg:items-start lg:gap-2">
              <li>
                <FooterLink to="/about" className="hover:brightness-[80%]">
                  Tentang Kami
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/history" className="hover:brightness-[80%]">
                  Sejarah
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  to="/our-victory"
                  className="hover:brightness-[80%]"
                >
                  Kemenangan
                </FooterLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <h2 className="border-b-2 border-b-green-gp-400 font-montserrat text-xl font-bold text-green-400 md:text-2xl">
              Artikel
            </h2>
            <ul className="flex items-center gap-4 text-center text-white md:gap-8 lg:flex-col lg:items-start lg:gap-2">
              <li>
                <FooterLink
                  to="articles?category=Semua"
                  className="hover:brightness-[80%]"
                >
                  Semua
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  to="articles?category=Krisis Iklim"
                  className="hover:brightness-[80%]"
                >
                  Krisis Iklim
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  to="articles?category=Hutan"
                  className="hover:brightness-[80%]"
                >
                  Hutan
                </FooterLink>
              </li>
              <li>
                <FooterLink
                  to="articles?category=Polusi"
                  className="hover:brightness-[80%]"
                >
                  Polusi
                </FooterLink>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="mb-12 flex flex-col justify-center gap-2 text-center font-montserrat text-white md:gap-3 xl:gap-4">
            <h2 className="text-xl font-semibold md:text-2xl">Contact Us</h2>
            <div className="flex items-center gap-4 text-xl xl:text-2xl">
              {contacts.map((contact) => (
                <FooterLink
                  key={contact.title}
                  to={contact.url}
                  type="original"
                  target="_blank"
                >
                  {contact.icon}
                </FooterLink>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="flex w-full items-center">
        <img
          src={greenpeaceLogoWhite}
          alt="Greenpeace Logo"
          className="absolute left-8 h-8 bg-green-gp-900 px-4 md:left-16 md:h-11 lg:px-12"
        />
        <img
          src={whiteLineIllustration}
          alt="Artboard Illustration"
          className="h-8 w-full bg-cover bg-repeat-x object-cover md:h-10"
        />
      </div>
    </footer>
  );
}

function FooterLink({ to, type, className, target, children }) {
  if (type === "original") {
    return (
      <a href={to} className={className} target={target}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className} target={target}>
      {children}
    </Link>
  );
}

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FooterLink.defaultProps = {
  type: "",
  target: "",
  className: "",
};
