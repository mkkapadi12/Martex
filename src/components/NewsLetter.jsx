import React from "react";

const NewsLetter = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="container px-4 mx-auto xl:max-w-7xl xl:px-1 sm:px-9">
        <div className="mb-16 border-t border-gray-200" />

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl md:text-3xl text-center sm:text-start text-2xl font-semibold text-martex-dark_text xl:text-[38px] !leading-normal">
            Stay up to date with our news,
            <br className="hidden sm:block" />
            ideas and updates
          </h2>

          <div className="flex flex-wrap w-full max-w-md gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-black"
            />
            <button className="px-6 py-3 w-full sm:w-auto font-semibold text-white transition bg-[#1680fb] duration-300 rounded-lg hover:bg-[#185abd] whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-gray-200" />
      </div>
    </section>
  );
};

export default NewsLetter;
