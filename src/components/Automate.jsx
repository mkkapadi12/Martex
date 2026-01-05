import React from "react";
import tool1 from "../assets/images/icons/tool-1.png";
import tool2 from "../assets/images/icons/tool-2.png";
import tool3 from "../assets/images/icons/tool-3.png";
import tool4 from "../assets/images/icons/tool-4.png";
import tool5 from "../assets/images/icons/tool-5.png";

const integrations = [
  {
    name: "Zapier",
    img: tool1,
  },
  {
    name: "Google Analytics",
    img: tool2,
  },
  {
    name: "Amplitude",
    img: tool3,
  },
  {
    name: "HubSpot",
    img: tool4,
  },
  {
    name: "MailChimp",
    img: tool5,
  },
];

export default function Automate() {
  return (
    <section className="container py-20 mx-auto ">
      <div className="mx-auto text-center max-w-7xl bg-[#f6f7fb] rounded-xl px-7 py-14">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-[#353f4f]">
          Automate your workflow with
          <br className="hidden md:block" /> our integrations
        </h2>

        <p className="max-w-xl mx-auto mt-4 text-gray-500">
          Ligula risus auctor tempus magna feugiat lacinia.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-3 md:grid-cols-5">
          {integrations.map((item, index) => (
            <div key={index} className="cursor-pointer">
              <div className="flex flex-col items-center justify-center px-4 py-6 transition bg-white shadow-sm rounded-xl hover:shadow-md">
                <img
                  src={item.img}
                  alt={item.name}
                  className="object-contain w-auto h-20 mx-auto"
                />
              </div>
              <p className="mt-4 text-lg font-medium text-gray-700">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="inline-flex items-center px-8 py-3 border-2 border-[#353f4f] rounded-md text-base font-semibold text-[#353f4f] hover:bg-[#f74780] hover:border-[#f74780] hover:text-white transition-colors duration-300">
            View all integrations
          </button>
        </div>
      </div>
    </section>
  );
}
