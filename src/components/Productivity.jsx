import React from "react";
import f13 from "../assets/images/img-13.png";
import { CheckIcon } from "lucide-react";

const Productivity = () => {
  const bulletPoints = [
    "Magna dolor luctus at egestas sapien",
    "Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue varius magnis",
    "Volute turpis dolores and sagittis congue",
  ];
  return (
    <section className="container py-20 mx-auto overflow-hidden">
      <div className="px-4 mx-auto mb-10 max-w-7xl sm:px-6 lg:px-8 sm:mb-20">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-6">
          <div className="max-w-lg mx-auto lg:mx-0">
            <span className="block mb-4 text-sm font-bold tracking-widest text-gray-500 uppercase">
              One-stop solution
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#353f4f] leading-tight mb-6">
              Achieve more with better workflows
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Sodales tempor sapien quaerat ipsum and congue undo laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna ligula and
              cursus vitae
            </p>

            <ul className="space-y-5">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 mr-3 text-pink-500">
                    <CheckIcon />
                  </span>
                  <span className="text-lg text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <img src={f13} alt="productivity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productivity;
