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
    <section className="py-10 xl:py-12">
      <div className="container px-3 mx-auto sm:px-6">
        <div className="mx-auto max-w-4xl xl:max-w-[1300px] bg-[#f6f7fb] rounded-xl px-9 py-14">
          {/* text */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold sm:text-5xl !leading-tight xl:text-6xl text-martex-dark_text">
              Automate your workflow <br className="hidden sm:block xl:hidden"/> with
              <br className="hidden xl:block" /> our integrations
            </h2>

            <p className="max-w-xl mx-auto mt-4 text-xl xl:text-2xl text-martex-light_text">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </div>
          {/* integrations */}
          <div className="grid grid-cols-2 gap-8 mt-12 sm:grid-cols-3 md:grid-cols-5 xl:px-6">
            {integrations.map((item, index) => (
              <div key={index} className="text-center cursor-pointer">
                <div className="flex flex-col items-center justify-center transition bg-white shadow-sm aspect-[1/0.9] xl:aspect-[1/0.8] rounded-xl hover:shadow-md">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-contain w-auto h-16 mx-auto"
                  />
                </div>
                <p className="mt-4 text-base font-semibold text-martex-dark_text xl:text-lg">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-8 py-3 font-semibold transition-colors duration-300 border-2 rounded-md xl:text-lg border-martex-dark_text text-martex-dark_text hover:bg-martex-light_pink hover:border-martex-light_pink hover:text-white">
              View all integrations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
