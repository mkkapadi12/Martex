import React from "react";
import discover from "../assets/images/img-19.png";
import f09 from "../assets/images/img-09.png";

const Discover = () => {
  const data = [
    {
      id: 1,
      title: "Register in 30 seconds",
      desc: "Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat",
    },
    {
      id: 2,
      title: "Customizable Dashboards",
      desc: "Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat",
    },
    {
      id: 3,
      title: "Improved Productivity",
      desc: "Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat",
    },
  ];

  return (
    <section className="py-10 xl:py-12">
      <div className="container px-3 mx-auto space-y-20 sm:px-6">
        <div className="mx-auto max-w-[1300px] space-y-16 xl:space-y-14">
          {/* title */}
          <div className="space-y-5">
            <h1 className="max-w-3xl xl:max-w-5xl mx-auto text-[27px] font-semibold text-center !leading-tight sm:text-5xl xl:text-6xl text-martex-dark_text">
              Discover insights across all your data with Martex
            </h1>
            <p className="max-w-2xl mx-auto text-xl leading-relaxed text-center text-martex-light_text xl:text-2xl">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </div>
          {/* image */}
          <div className="max-w-5xl mx-auto sm:px-5 xl:px-2">
            <img
              src={discover}
              alt="discover insights illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* button */}
          <div className="space-y-4 text-center">
            <button className="inline-flex items-center px-8 py-3 font-semibold transition-colors duration-500 border-2 rounded-sm xl:text-lg border-martex-dark_text text-martex-dark_text hover:bg-martex-light_pink hover:border-martex-light_pink hover:text-white">
              Monitor your activity
            </button>
            <p className="text-base text-martex-light_text xl:text-lg">
              Free 14 days trial | Exclusive Support | No Fees
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[1300px] xl:px-0 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-6">
            {/* image */}
            <div className="p-3 sm:px-0">
              <img src={f09} alt="img 10" />
            </div>
            {/* content */}
            <div className="flex flex-col items-start justify-center gap-4 xl:gap-6">
              {data.map((item) => {
                return (
                  <div key={item.id} className="flex items-start gap-4 sm:gap-6">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex items-center justify-center w-10 h-10 text-xl font-bold text-white transition-colors duration-300 scale-100 border-2 rounded-full xl:h-12 xl:w-12 bg-martex-light_pink border-martex-light_pink hover:bg-white hover:text-martex-light_pink">
                        {" "}
                        <span>{item.id}</span>
                      </div>
                      <span className="w-[3px] h-[80px] xl:h-[90px] bg-[#e4e4e4]"></span>
                    </div>
                    <div className="space-y-4 xl:space-y-6">
                      <h2 className="text-xl font-semibold xl:text-2xl text-martex-dark_text">
                        {item.title}
                      </h2>
                      <p className="text-base xl:text-lg text-martex-light_text">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
