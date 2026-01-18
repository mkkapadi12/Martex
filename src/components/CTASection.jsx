import React from "react";

export default function CTASection({ cta_data }) {
  const { btn_color, btn_text, title, bg } = cta_data;
  return (
    <section className="bg-white sm:pb-12 sm:px-4">
      <div className="container px-0 mx-auto xl:max-w-7xl xl:px-0 sm:px-9">
        <div
          className="relative py-16 overflow-hidden text-center text-white bg-fixed bg-no-repeat bg-cover sm:px-6 sm:rounded-3xl"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          {/* Content */}
          <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-4 text-lg text-white">
            It only takes a few clicks to get started
          </p>

          {/* Button */}
          <div className="mt-8">
            <button
              className={`px-10 py-3 text-lg font-semibold text-white transition-all duration-300 ${btn_color} rounded-lg hover:border hover:bg-transparent hover:border-white`}
            >
              Get started – it&apos;s free
            </button>
          </div>

          {/* Footer note */}
          <p className="flex items-center justify-center gap-2 mt-6 text-sm text-white/90">
            <span className="text-lg">✓</span>
            Free for 14 days, no credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
