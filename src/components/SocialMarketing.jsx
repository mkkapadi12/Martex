import React from "react";
import f1 from "../assets/images/f_06.png";
import f2 from "../assets/images/f_04.png";

export default function SocialMarketing({ title }) {
  return (
    <section className="py-10 xl:py-12">
      <div className="container px-3 mx-auto sm:px-6">
        {/* text */}
        <div className="px-4 mx-auto mb-12 space-y-4 text-center sm:max-w-3xl xl:max-w-4xl sm:px-0">
          <h2 className="text-3xl font-semibold sm:text-5xl xl:text-[55px] !leading-snug xl:!leading-tight text-martex-dark_text">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-martex-light_text xl:text-2xl">
            Ligula risus auctor tempus magna feugiat lacinia.
          </p>
        </div>
        {/* content */}
        <div className="grid gap-8 sm:px-6 xl:px-0 mx-auto md:grid-cols-2 max-w-[1300px]">
          {/* 1 */}
          <div className="flex flex-col-reverse gap-5 p-8 text-center bg-gray-100 sm:flex-col md:p-16 rounded-2xl">
            <div className="space-y-4">
              <h3 className="text-[22px] font-semibold sm:text-2xl xl:text-3xl text-martex-dark_text">
                Marketing Integrations
              </h3>
              <p className="xl:text-lg text-martex-light_text">
                Aliquam a augue suscipit luctus diam neque purus ipsum neque and
                dolor primis libero
              </p>
            </div>
            <div>
              <img src={f1} alt="marketing" className="mx-auto" />
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-5 p-8 text-center bg-gray-100 md:p-16 rounded-2xl">
            <div>
              <img src={f2} alt="productivity" />
            </div>
            <div className="space-y-4">
              <h3 className="text-[22px] font-semibold sm:text-2xl xl:text-3xl text-martex-dark_text">
                Productivity Focused
              </h3>
              <p className="xl:text-lg text-martex-light_text">
                Aliquam a augue suscipit luctus diam neque purus ipsum neque and
                dolor primis libero
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
