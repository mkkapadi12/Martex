import React from "react";
import f2 from "../assets/images/img-02.png";
import {
  Layers,
  MousePointerClick,
  Video,
  BarChart3,
  CheckIcon,
} from "lucide-react";

const SmartSolutionsSection = () => {
  const featuresData = [
    {
      title: "Content Marketing",
      description:
        "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor",
      icon: Layers,
    },
    {
      title: "Pay Per Click (PPC)",
      description:
        "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor",
      icon: MousePointerClick,
    },
    {
      title: "Video Marketing",
      description:
        "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor",
      icon: Video,
    },
    {
      title: "Business Analytics",
      description:
        "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor",
      icon: BarChart3,
    },
  ];

  const bulletPoints = [
    "Magna dolor luctus at egestas sapien",
    "Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue varius magnis",
    "Volute turpis dolores and sagittis congue",
  ];

  return (
    <section className="py-10 xl:py-12">
      <div className="container px-3 mx-auto sm:px-6">
        {/* Section 1 */}
        <div className="mx-auto max-w-[1300px] mb-16">
          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-6">
            {/* content */}
            <div className="w-full space-y-5 sm:max-w-md xl:max-w-lg xl:space-y-7">
              <span className="block text-sm font-bold tracking-widest uppercase text-martex-light_text">
                One-stop solution
              </span>
              <h2 className="text-[26px] sm:text-[44px] font-bold leading-tight xl:text-[55px] text-martex-dark_text">
                Smart solutions, <br className="hidden sm:block" />
                real-time results
              </h2>
              <p className="text-base leading-relaxed xl:text-lg text-martex-light_text">
                Sodales tempor sapien quaerat ipsum and congue undo laoreet
                turpis neque auctor turpis vitae dolor luctus placerat magna
                ligula and cursus vitae
              </p>

              <ul className="space-y-3 xl:space-y-5">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mt-1 mr-3 text-martex-light_pink">
                      <CheckIcon size={20} />
                    </span>
                    <span className="text-base xl:text-lg text-martex-light_text">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-8">
              {featuresData.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white text-center sm:text-start rounded-2xl p-5 xl:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 border border-gray-100 flex flex-col items-center sm:items-start"
                >
                  <div className="flex items-center justify-center w-20 h-20 mb-6 text-center bg-pink-100 rounded-full text-martex-light_pink">
                    <feature.icon className="w-10 h-10 xl:w-12 xl:h-12" />
                  </div>
                  <h3 className="mb-3 font-bold text-lg xl:text-[22px] text-martex-dark_text">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed xl:text-lg text-martex-light_text">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="mx-auto max-w-[1300px]">
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
            {/* image */}
            <div className="p-2 sm:px-0">
              <img src={f2} alt="Easy Integration" />
            </div>
            {/* content */}
            <div className="order-1 space-y-5 xl:px-0 lg:order-2">
              <h2 className="text-sm font-semibold uppercase xl:text-base text-martex-light_text">
                Easy Integration
              </h2>

              <h1 className="text-[26px] sm:text-[44px] font-bold leading-tight xl:text-[53px] text-martex-dark_text">
                Plug your essential tools in few clicks
              </h1>

              <ul className="ml-5 space-y-4 text-base list-disc xl:text-xl xl:space-y-6 text-martex-light_text">
                <li>
                  Cursus purus suscipit vitae cubilia magnis volute egestas
                  vitae sapien turpis sodales magna undo aoreet primis
                </li>
                <li>
                  Tempor sapien quaerat an ipsum laoreet purus and sapien dolor
                  an ultrice ipsum aliquam undo congue dolor cursus purus congue
                  and ipsum purus sapien a blandit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSolutionsSection;
