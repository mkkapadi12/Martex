import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { homeNav, mobilelinks, othersNav } from "../Data/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem } from "./ui/accordion";
import { AccordionTrigger } from "@radix-ui/react-accordion";

const pagenavigation = [
  {
    section: "about",
    items: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/teams" },
      { name: "Careers", path: "/careers" },
      { name: "Career Details", path: "/career-role" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    section: "features",
    items: [
      { name: "Core Features", path: "/features" },
      { name: "Our Projects", path: "/projects" },
      { name: "Project Details", path: "/project-details" },
      { name: "Testimonials", path: "/reviews" },
      { name: "Download Page", path: "/download" },
    ],
  },
  {
    section: "pricing-help",
    items: [
      { name: "Pricing Page #1", path: "/pricing" },
      { name: "Pricing Page #2", path: "/pricing" },
      { name: "FAQs Page", path: "/faqs" },
      { name: "Help Center", path: "/help-center" },
      { name: "404 Page", path: "/404" },
    ],
  },
  {
    section: "blog-auth",
    items: [
      { name: "Blog Listing", path: "/blog" },
      { name: "Single Blog Post", path: "/single-blog" },
      { name: "Login Page", path: "/login" },
      { name: "Signup Page", path: "/signup" },
      { name: "Reset Password", path: "/reset-password" },
    ],
  },
];

export default function Navbar({ data }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { text, logo, logoscroll, link_color, btn_color, btn_text } = data;

  const location = useLocation();
  const navlinks = location.pathname === "/" ? homeNav : othersNav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#ffffffb3] shadow-md backdrop-blur-md"
          : `sm:bg-transparent ${location.pathname === "/" ? "bg-martex-brand" : "bg-transparent"}`
      }`}
    >
      <nav
        className={`flex items-center justify-between px-6 mx-auto transition-all duration-300 max-w-6xl lg:px-5 ${
          scrolled ? "py-5 sm:py-5" : "py-7"
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={scrolled ? logoscroll : logo}
            alt="logo"
            className="h-8 xl:h-10"
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden lg:flex !gap-x-10 transition-all duration-300 lg:justify-end lg:w-[53%] ${
            scrolled ? "text-martex-dark_text" : `${link_color}`
          }`}
        >
          <NavigationMenu>
            <NavigationMenuList className="items-center gap-x-8">
              {/* {[1, 2].map((item) => {
                return (
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link className="text-base xl:text-[19px] font-medium"></Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })} */}

              <NavigationMenuItem className="!bg-transparent hover:!bg-transparent !text-base xl:!text-[19px] !font-medium">
                <NavigationMenuTrigger
                  className={`!bg-transparent hover:!bg-transparent p-0 text-base xl:!text-[19px] !font-medium ${
                    scrolled ? "!text-martex-dark_text" : `${link_color}`
                  } `}
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!rounded-sm border">
                  <ul className="w-48 px-3 py-2 space-y-1 text-base font-semibold bg-white !rounded-none text-start text-martex-dark_text">
                    <Link to="/">
                      <li className="p-2 transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-martex-light_pink">
                        Why Martex?
                      </li>
                    </Link>
                    <Link to="/">
                      <li className="p-2 transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-martex-light_pink">
                        Integration
                      </li>
                    </Link>
                    <Link to="/">
                      <li className="p-2 transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-martex-light_pink">
                        How it works
                      </li>
                    </Link>
                    <Link to="/">
                      <li className="p-2 transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-martex-light_pink">
                        Best Solutions
                      </li>
                    </Link>
                    <Link to="/">
                      <li className="p-2 transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-martex-light_pink">
                        Testimonials
                      </li>
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/features"
                    className="text-base xl:text-[19px] font-medium"
                  >
                    Features
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem
                className={`!bg-transparent hover:!bg-transparent  !text-base xl:!text-[19px] !font-medium`}
              >
                <NavigationMenuTrigger
                  className={`!bg-transparent hover:!bg-transparent p-0 text-base xl:!text-[19px] !font-medium ${
                    scrolled ? "!text-martex-dark_text" : `${link_color}`
                  } `}
                >
                  Pages
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white text-martex-dark_text md:w-[700px] xl:w-[778px]">
                  <div className="grid grid-cols-4 gap-8 px-6 py-4 text-base font-semibold">
                    {pagenavigation.map((group, index) => (
                      <ul key={index} className="flex flex-col">
                        {group.items.map((item, idx) => (
                          <Link key={idx} to={item.path}>
                            <li className="p-2 transition-all duration-300 rounded-sm hover:bg-slate-100 hover:text-martex-light_pink text-martex-dark_text">
                              {item.name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/pricing"
                    className="text-base xl:text-[19px] font-medium"
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/faqs"
                    className="text-base xl:text-[19px] font-medium"
                  >
                    FAQs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Buttons */}
        <div className="items-center hidden gap-4 lg:flex">
          <Link
            to="/login"
            className={`font-semibold text-base xl:text-lg ${
              scrolled ? "text-martex-dark_text" : `${text}`
            }`}
          >
            Sign in
          </Link>
          <Link to="/signup">
            <button
              className={`px-5 xl:px-6 text-base xl:text-lg py-1  border-2 text-white ${btn_color} rounded-[6px]  transition-all duration-300
              
              ${location.pathname === "/" ? (scrolled ? "border-martex-light_pink hover:border-martex-dark_text hover:text-martex-dark_text hover:bg-transparent" : "border-martex-light_pink hover:border-white hover:bg-transparent") : "hover:bg-martex-dark_blue hover:border-martex-dark_blue border-martex-light_blue"}
              `}
            >
              {btn_text}
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`text-2xl lg:hidden ${
            scrolled
              ? `text-martex-light_text`
              : location.pathname === "/"
                ? "text-white"
                : `${text}`
          }`}
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen overflow-x-scroll w-[85%] max-w-sm bg-white transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex items-center p-5 border-b">
          <button onClick={() => setOpen(false)}>
            <X size={26} className="text-martex-light_text" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col font-medium divide-y !text-[#666] bg-white">
          <Accordion type="single" collapsible className="w-full">
            <div className="">
              <AccordionItem value="about" className="p-4 border-none">
                <AccordionTrigger className="flex justify-between w-full gap-4 text-lg font-semibold">
                  About
                  <ChevronDown />
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="mt-4 space-y-3 text-base text-[#666] ">
                    <li>Why Martex ?</li>
                    <li>Integrations</li>
                    <li>How It Works</li>
                    <li>Best Solutions</li>
                    <li>Testimonials</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <hr />
              <AccordionItem value="features" className="p-4 border-none">
                <AccordionTrigger className="flex justify-between w-full gap-4 text-lg font-semibold">
                  <Link to="/features">Features</Link>
                </AccordionTrigger>
              </AccordionItem>
              <hr />
              <AccordionItem value="pages" className="p-4 border-none">
                <AccordionTrigger className="flex justify-between w-full gap-4 text-lg font-semibold">
                  Pages
                  <ChevronDown />
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="mt-4 space-y-3 text-base text-[#666] ">
                    {mobilelinks?.map((link, index) => {
                      return (
                        <li key={index}>
                          <Link to={link.path}>{link.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <hr />
              <AccordionItem value="features" className="p-4 border-none">
                <AccordionTrigger className="flex justify-between w-full gap-4 text-lg font-semibold">
                  <Link to="/pricing">Pricing</Link>
                </AccordionTrigger>
              </AccordionItem>
              <hr />
              <AccordionItem value="features" className="p-4 border-none">
                <AccordionTrigger className="flex justify-between w-full gap-4 text-lg font-semibold">
                  <Link to="/faqs">FAQs</Link>
                </AccordionTrigger>
              </AccordionItem>
            </div>
          </Accordion>

          <Link to="/login" className="p-5 text-lg font-semibold">
            Sign in
          </Link>

          {/* Sign up button */}
          <Link to="/signup" className="w-full">
            <button className="w-full p-5 text-lg font-semibold text-left text-white bg-martex-light_pink">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
