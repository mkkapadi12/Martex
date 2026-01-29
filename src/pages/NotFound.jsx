import React from "react";
import error from "../assets/images/error-404.png";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "./../components/Navbar";
import logoblue from "./../assets/images/logo-blue.png";

const NotFound = () => {
  const data = {
    logo: logoblue,
    logoscroll: logoblue,
    bg: "bg-white",
    link_color: "text-martex-dark_text",
    btn_color: "bg-[#1680fb]",
    btn_text: "Get Started",
    text: "text-martex-dark_text",
  };
  return (
    <section className="bg-[#f7f8f9] min-h-screen">
      <Navbar data={data} />
      <div className="container">
        <div className="flex flex-wrap justify-center mx-auto">
          <div className="w-full max-w-full px-4 mx-auto md:w-9/12 lg:max-xl:w-8/12 xl:8/12">
            <div className="pt-[180px] pb-[80px]">
              <div className="relative z-10 flex justify-center w-[80%] mx-auto mb-9 xl:mb-12 xl:w-full">
                <img src={error} alt="not found" />
              </div>
              <h1 className="mb-4 text-3xl font-semibold text-center md:text-5xl xl:text-6xl text-martex-dark_text md:mb-8 xl:mb-10">
                Page Not Found
              </h1>
              <p className="mx-auto mb-10 text-xl font-medium text-center text-martex-light_text xl:text-2xl md:max-w-lg xl:max-w-xl md:text-xl">
                Oops! The page you are looking for might have been moved,
                renamed or might never existed
              </p>
              <div className="flex justify-center ">
                <Link to="/" className="text-center">
                  <Button
                    variant="destructive"
                    className="p-6 bg-[#1680fb] text-center mx-auto"
                  >
                    Back to home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-[#f7f8f9] py-16 border border-t-2">
          <div className="flex flex-wrap items-center justify-center gap-2 mx-auto sm:justify-between max-w-7xl">
            {/* Copyright */}
            <div>
              <p className="text-base text-gray-500">
                © 2025 Martex Labs, Inc.
              </p>
            </div>
            {/* terms & policy */}
            <div>
              <p className="text-base text-gray-500">
                Privacy Policy | Terms & Conditions
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default NotFound;
