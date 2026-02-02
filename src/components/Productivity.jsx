import React from "react";
import { CheckIcon } from "lucide-react";

const Productivity = ({ img }) => {
  const bulletPoints = [
    "Magna dolor luctus at egestas sapien",
    "Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue varius magnis",
    "Volute turpis dolores and sagittis congue",
  ];
  return (
    <section className="py-10 xl:py-12">
      <div className="container px-3 mx-auto sm:px-6">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid items-center grid-cols-1 gap-10 sm:px-6 lg:grid-cols-2 xl:gap-12 xl:px-0 ">
            {/* text */}
            <div className="order-2 space-y-5 sm:order-1 xl:px-2">
              <h2 className="text-sm font-semibold uppercase xl:text-base text-martex-light_text">
                Productivity Focused
              </h2>
              <h1 className="text-[26px] sm:text-[44px] font-bold leading-tight xl:text-[53px] text-martex-dark_text">
                Achieve more with <br className="hidden sm:block" /> better
                workflows
              </h1>
              <p className="text-base leading-relaxed xl:text-lg text-martex-light_text">
                Sodales tempor sapien quaerat ipsum and congue undo laoreet
                turpis neque auctor turpis vitae dolor luctus placerat magna
                ligula and cursus vitae
              </p>

              <ul className="space-y-3">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-martex-light_blue">
                      <CheckIcon size={18} />
                    </span>
                    <span className="text-base xl:text-lg text-martex-light_text">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* image */}
            <div className="order-1 sm:order-2 xl:px-4">
              <img src={img} alt="productivity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productivity;
