import React from "react";
import bg from "../assets/images/bg-03.jpg";

export default function CTASection() {
  return (
    <section className="px-4 pb-20 bg-white">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative px-6 py-16 overflow-hidden text-center text-white bg-fixed bg-no-repeat bg-cover rounded-3xl"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          {/* Content */}
          <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Starting with Martex is easy,
            <br className="hidden sm:block" /> fast and free
          </h2>

          <p className="mt-4 text-lg text-white">
            It only takes a few clicks to get started
          </p>

          {/* Button */}
          <div className="mt-8">
            <button className="px-10 py-3 text-lg font-semibold text-white transition-all duration-300 bg-pink-500 rounded-lg hover:border hover:bg-transparent hover:border-white">
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
