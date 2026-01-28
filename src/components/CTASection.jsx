import React from "react";

export default function CTASection({ cta_data }) {
  const { btn_color, btn_text, title, bg } = cta_data;
  return (
    <section className="bg-white sm:pb-12 sm:px-4">
      <div className="container px-0 mx-auto xl:max-w-7xl xl:px-0 sm:px-9">
        <div
          className="relative px-6 py-16 overflow-hidden text-center text-white bg-fixed bg-no-repeat bg-cover xl:px-5 sm:rounded-2xl"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          {/* Content */}
          <div className="mx-auto sm:max-w-lg xl:max-w-3xl">
            <h2 className="sm:text-[43px] font-bold text-3xl xl:text-[55px] !leading-tight">
              {title}
            </h2>

            <p className="mt-4 text-lg text-white sm:text-xl xl:text-2xl">
              It only takes a few clicks to get started
            </p>
          </div>

          {/* Button */}
          <div className="mt-8">
            <button
              className={`px-7 py-2 xl:py-3 rounded-sm text-lg font-semibold text-white transition-all duration-500 ${btn_color} rounded-lg border-2 border-martex-light_pink hover:bg-transparent hover:border-white`}
            >
              Get started – it&apos;s free
            </button>
          </div>

          {/* Footer note */}
          <p className="flex items-center justify-center gap-2 mt-6 text-base xl:text-lg text-white/90">
            <span className="">✓</span>
            Free for 14 days, no credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
