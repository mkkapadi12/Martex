import React from "react";
import { jobsData } from "../Data/testimonialsData";

export const JobsOpen = () => {
  return (
    <section className="py-10 xl:py-12">
      <div className="mx-auto max-w-7xl xl:py-16">
        <div className="container px-3 mx-auto sm:px-6">
          <div className="">
            {/* text */}
            <div className="space-y-5 text-center">
              <h1 className="text-3xl font-semibold sm:text-5xl xl:text-6xl text-martex-dark_text">
                Open Roles at Martex
              </h1>
              <p className="mx-auto sm:text-lg xl:text-[20px] text-martex-light_text sm:px-0 px-4 sm:max-w-2xl xl:max-w-3xl">
                We’re building a better way to work, fueled by transparency,
                trust, and technology that is a force for positive change for
                the hourly workforce
              </p>
            </div>
            <div className="pt-10">
              <div className="grid grid-cols-1 gap-8 px-3 sm:grid-cols-2 sm:px-0">
                {/* job details */}
                {jobsData.map((data) => {
                  return (
                    <div
                      key={data.id}
                      className="sm:text-start text-center bg-[#f7f8f9] p-[25px_30px] sm:p-[25px_25px] lg:p-[25px_35px] rounded-[10px] space-y-2 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-[15px] font-semibold uppercase text-martex-light_text">
                        {data.department}
                      </span>
                      <h2 className="text-xl font-semibold text-martex-dark_text xl:text-2xl">
                        {data.title}
                      </h2>
                      <h3 className="text-base sm:text-[14px] xl:text-lg text-martex-light_text">
                        {data.location + " / " + data.type}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
