import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link, ScrollRestoration } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

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

  const articlesSubSections = [
    "Tentang Kami",
    "Sejarah Greenpeace",
    "Kemenangan",
  ];
  const articlesSubSectionstwo = ["Semua", "Krisis Iklim", "Hutan", "Polusi"];

  return (
    <footer className="flex w-full flex-col items-center bg-green-gp-900 py-4">
      <ScrollRestoration />
      <div className="container flex w-full items-center justify-between px-8 lg:flex-row ">
        <div className="mb-8 flex flex-col items-center justify-center gap-4 p-4 text-left">
          <h2 className="border-b-2 border-b-green-gp-400 font-montserrat text-xl font-bold text-green-400 md:text-xl">
            Kenali Greenpeace
          </h2>
          <ul className="flex flex-col gap-4 text-white md:gap-1 lg:gap-2">
            {articlesSubSections.map((article) => (
              <li key={article}>
                <FooterLink
                  to={`aboutme?category=${article}`}
                  className="hover:brightness-[80%]"
                >
                  {article}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 flex flex-col items-center justify-center gap-4 p-4 text-left">
          <h2 className="border-b-2 border-b-green-gp-400 font-montserrat text-xl font-bold text-green-400 md:text-xl">
            Artikel
          </h2>
          <ul className="flex flex-col gap-4 text-white md:gap-1 lg:gap-2">
            {articlesSubSectionstwo.map((section) => (
              <li key={section}>
                <FooterLink
                  to={`articles?category=${section}`}
                  className="hover:brightness-[80%]"
                >
                  {section}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col justify-center gap-2 text-center font-montserrat text-white md:gap-2 xl:gap-4">
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
      </div>

      <div className="flex w-full items-center">
        <img
          src="/src/assets/images/greenpeace-logo-white.png"
          alt="Greenpeace Logo"
          className="absolute left-8 h-8 bg-green-gp-900 px-4 md:left-16 md:h-6 lg:px-12"
        />
        <img
          src="/src/assets/images/white-line-illustration.png"
          alt="Artboard Illustration"
          className="h-8 w-full bg-cover bg-repeat-x object-cover md:h-6"
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
