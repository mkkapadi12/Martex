import React from "react";
import { Button } from "./ui/button";

const SmallFaq = ({ faq }) => {
  const { title, btn_text } = faq;
  return (
    <section
      className="py-5 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("https://martex-tailwindcss.ibthemespro.com/images/bg-02.jpg")`,
      }}
    >
      <div className="mx-auto xl:max-w-6xl sm:max-w-5xl xl:px-0 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 p-5 sm:p-10 sm:flex-row">
          <div className="space-y-2 text-center sm:text-start">
            <h1 className="text-[26px] font-semibold sm:text-4xl xl:text-5xl text-martex-dark_text">
              {title}
            </h1>
            <p className="text-lg/8  xl:text-[22px] text-martex-light_text">
              Don't hesitate to contact us about any question you might be
              interested in
            </p>
            <Button className="xl:px-8 xl:py-6 text-base px-7 py-6 font-semibold xl:text-lg rounded-[5px] bg-martex-light_blue hover:bg-martex-dark_blue transition-all duration-300 !mt-5">
              {btn_text}
            </Button>
          </div>
          <div className="p-0 sm:w-[60%] xl:w-[65%]">
            <img
              src="https://martex-tailwindcss.ibthemespro.com/images/help.png"
              alt="faq image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallFaq;
