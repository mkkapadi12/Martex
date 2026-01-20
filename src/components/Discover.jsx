import React from "react";
import discover from "../assets/images/img-19.png";
import f09 from "../assets/images/img-09.png";

const Discover = () => {
  return (
    <div className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-martex-dark_text mb-6 max-w-4xl mx-auto text-center">
            Discover insights across all your data with Martex
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-center text-gray-600 sm:text-xl">
            Ligula risus auctor tempus magna feugiat lacinia.
          </p>
        </div>
        <div className="mt-12">
          <img
            src={discover}
            alt="discover insights illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="mt-12 space-y-4 text-center">
          <button className="inline-flex items-center px-8 py-3 border-2 border-martex-dark_text rounded-md text-base font-semibold text-martex-dark_text hover:bg-martex-light_pink hover:border-martex-light_pink hover:text-white transition-colors duration-300">
            Monitor your activity
          </button>
          <p className="text-martex-light_text">
            Free 14 days trial | Exclusive Support | No Fees
          </p>
        </div>
      </div>
      <div className="px-4 pt-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-6">
          <div>
            <img src={f09} alt="img 10" />
          </div>
          <div className="flex flex-col items-start justify-center gap-6">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white transition-colors duration-300 scale-100 bg-pink-500 border-2 border-pink-500 rounded-full hover:bg-white hover:text-pink-500">
                  {" "}
                  <span>1</span>
                </div>
                <span className="w-[3px] lg:h-[90px] bg-[#e4e4e4]"></span>
              </div>
              <div className="mt-3">
                <h2 className="text-2xl font-semibold text-martex-dark_text">
                  Register in 30 seconds
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Ligula risus auctor tempus feugiat dolor lacinia nemo purus in
                  lipsum purus sapien quaerat a primis viverra tellus vitae
                  luctus dolor ipsum neque ligula quaerat
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white transition-colors duration-300 scale-100 bg-pink-500 border-2 border-pink-500 rounded-full hover:bg-white hover:text-pink-500">
                  <span>2</span>
                </div>
                <span className="w-[3px] lg:h-[90px] bg-[#e4e4e4]"></span>
              </div>
              <div className="mt-3">
                <h2 className="text-2xl font-semibold text-martex-dark_text">
                  Customizable Dashboards
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Ligula risus auctor tempus feugiat dolor lacinia nemo purus in
                  lipsum purus sapien quaerat a primis viverra tellus vitae
                  luctus dolor ipsum neque ligula quaerat
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white transition-colors duration-300 scale-100 bg-pink-500 border-2 border-pink-500 rounded-full hover:bg-white hover:text-pink-500">
                  <span>3</span>
                </div>
                <span className="w-[3px] lg:h-[90px] bg-[#e4e4e4]"></span>
              </div>
              <div className="mt-3">
                <h2 className="text-2xl font-semibold text-martex-dark_text">
                  Improved Productivity
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Ligula risus auctor tempus feugiat dolor lacinia nemo purus in
                  lipsum purus sapien quaerat a primis viverra tellus vitae
                  luctus dolor ipsum neque ligula quaerat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
