import React from "react";
import { Button } from "./ui/button";

export const HiringPoster = () => {
  return (
    <section>
      <div className="xl:max-w-[1300px] container mx-auto sm:px-10 xl:px-2 pb-16">
        <div
          className="xl:px-2 mt-[30px] bg-no-repeat bg-fixed bg-cover sm:rounded-xl md:pl-[60px] xl:pl-[80px] pt-[55px] sm:pt-0 sm:px-0 px-[25px]"
          style={{
            backgroundImage: `url("https://martex-tailwindcss.ibthemespro.com/images/bg-05.jpg")`,
            position: "center center",
          }}
        >
          <div className="flex flex-col sm:flex-row">
            {/* details */}
            <div className="flex sm:text-start text-center gap-4 flex-col items-center sm:items-start justify-center md:max-lg:w-7/12 lg:max-xl:w-7/12 xl:w-7/12 w-full flex-[0_0_auto] sm:px-[calc(0.5*_1.5rem)] max-w-full">
              <h1 className="text-3xl sm:text-[40px] xl:text-[50px] sm:pr-[10%] !leading-tight font-semibold text-white ">
                We are looking for talented individuals
              </h1>
              <p className="max-w-md xl:max-w-xl text-lg xl:text-[21px] text-white">
                We're constantly looking for talented people to join our team.
                Don't hesitate to get in touch with us
              </p>
              <Button className="py-6 text-base font-semibold text-white transition-all duration-300 border rounded-sm text xl:text-lg px-7 bg-martex-light_blue hover:bg-transparent border-martex-light_blue hover:border-white">
                See open roles
              </Button>
            </div>
            {/* image */}
            <div className="xl:m-[-40px_-20px_-30px_-40px] sm:m-[-30px_-20px_-20px_-40px] m-[35px_0_-40px_0] md:w-5/12 lg:max-xl:w-5/12 xl:w-5/12 w-full flex-[0_0_auto] px-[calc(0.5*_1.5rem)] max-w-full">
              <img
                src={
                  "https://martex-tailwindcss.ibthemespro.com/images/img-16.png"
                }
                alt="cartoon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
