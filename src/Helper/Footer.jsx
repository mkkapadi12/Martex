import { Facebook, Twitter, Instagram } from "lucide-react";
import logoblack from "../assets/images/logo-black.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
    {
      name: "About",
      url: "/",
    },
    {
      name: "Blog",
      url: "/",
    },
    {
      name: "Privacy Policy",
      url: "/",
    },
    {
      name: "Cookie Policy",
      url: "/",
    },
    {
      name: "Contact Us",
      url: "/",
    },
  ];
  return (
    <footer className="px-4 py-8 sm:py-10 md:py-10 xl:py-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <img
            src={logoblack}
            alt="Martex logo"
            className="w-auto h-10 rounded xl:h-12"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-7 xl:my-10" />

        {/* Links */}
        <div className="flex flex-wrap justify-center text-base font-medium xl:text-lg text-martex-light_text gap-x-8 gap-y-4">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.url}
                className="transition-all duration-300 hover:text-martex-dark_text"
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-5 text-gray-400 xl:mt-10">
          {
            /* Social Media Icons */
            [
              { name: "Facebook", url: "#", icon: <Facebook size={24} /> },
              { name: "Twitter", url: "#", icon: <Twitter size={24} /> },
              { name: "Instagram", url: "#", icon: <Instagram size={24} /> },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="transition-all duration-300 hover:text-martex-dark_text"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))
          }
        </div>
      </div>
    </footer>
  );
}
