import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import logo from "../assets/images/logo-white.png";
import logopink from "../assets/images/logo-pink.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#ffffffb3] shadow-md opacity-100" : "bg-[#8a4be0]"
      }`}
    >
      <nav
        className={`flex items-center justify-between px-6 mx-auto transition-all duration-300 max-w-7xl lg:px-8 ${
          scrolled ? "py-6" : "py-7"
        }`}
      >
        {/* Logo */}
        <img src={scrolled ? logopink : logo} alt="logo" className="h-8" />

        {/* Desktop Menu */}
        <div
          className={`hidden pr-4 font-semibold lg:flex gap-x-12 transition-all duration-300 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <Link to="#">About</Link>
          <Link to="#">Features</Link>
          <Link to="#">Pages</Link>
          <Link to="#">Pricing</Link>
          <Link to="#">FAQ</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="items-center hidden gap-4 lg:flex">
          <Link
            to="/login"
            className={`font-semibold ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Sign in
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 text-white bg-pink-500 rounded-md">
              Sign up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl text-[#6c757d] lg:hidden"
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
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex items-center p-5 border-b">
          <button onClick={() => setOpen(false)}>
            <X size={26} className="text-gray-500" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col font-medium text-gray-700 divide-y">
          <div className="flex items-center justify-between p-5">
            <span>About</span>
            <ChevronDown size={18} />
          </div>

          <div className="p-5 text-gray-400 bg-gray-100">Features</div>

          <div className="flex items-center justify-between p-5">
            <span>Pages</span>
            <ChevronDown size={18} />
          </div>

          <Link to="#" className="p-5">
            Pricing
          </Link>

          <Link to="#" className="p-5">
            FAQs
          </Link>

          <Link to="#" className="p-5">
            Sign in
          </Link>

          {/* Sign up button */}
          <button className="p-5 font-semibold text-left text-white bg-pink-500">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
