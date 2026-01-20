import React from "react";
import f2 from "../assets/images/img-02.png";

// --- SVG Icons Components ---
// (Using inline SVGs to ensure exact styling without external dependencies)

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 w-5 h-5 text-pink-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const LayersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

const PPCIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
    />
  </svg>
);

const VideoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const AnalyticsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

// --- Reusable Feature Card Component ---
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 border border-gray-100">
      {/* Icon Container */}
      <div className="flex items-center justify-center w-16 h-16 mb-6 text-pink-500 rounded-full bg-pink-50">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
      <p className="leading-relaxed text-gray-500">{description}</p>
    </div>
  );
};

// --- Main Section Component ---
const SmartSolutionsSection = () => {
  const featuresData = [
    {
      title: "Content Marketing",
      description:
        "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor",
      icon: <LayersIcon />,
    },
    {
      title: "Pay Per Click (PPC)",
      description:
        "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor",
      icon: <PPCIcon />,
    },
    {
      title: "Video Marketing",
      description:
        "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor",
      icon: <VideoIcon />,
    },
    {
      title: "Business Analytics",
      description:
        "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor",
      icon: <AnalyticsIcon />,
    },
  ];

  const bulletPoints = [
    "Magna dolor luctus at egestas sapien",
    "Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue varius magnis",
    "Volute turpis dolores and sagittis congue",
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="px-4 mx-auto mb-10 max-w-7xl sm:px-6 lg:px-8 sm:mb-20">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-6">
          <div className="max-w-lg mx-auto lg:mx-0">
            <span className="block mb-4 text-sm font-bold tracking-widest text-gray-500 uppercase">
              One-stop solution
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-martex-dark_text leading-tight mb-6">
              Smart solutions, <br className="hidden sm:block" />
              real-time results
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Sodales tempor sapien quaerat ipsum and congue undo laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna ligula and
              cursus vitae
            </p>

            <ul className="space-y-5">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 mr-3">
                    <CheckIcon />
                  </span>
                  <span className="text-lg text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {featuresData.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <img src={f2} alt="Easy Integration" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="mb-6 text-lg font-semibold text-gray-600 uppercase sm:text-3xl">
              Easy Integration
            </h2>

            <h1 className="text-4xl md:text-5xl font-semibold text-martex-dark_text mb-6">
              Plug your essential tools in few clicks
            </h1>

            <ul className="mb-10 space-y-6">
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0"></span>
                <span className="leading-relaxed text-gray-600">
                  Cursus purus suscipit vitae cubilia magnis volute egestas
                  vitae sapien turpis sodales magna undo aoreet primis
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0"></span>
                <span className="leading-relaxed text-gray-600">
                  Tempor sapien quaerat an ipsum laoreet purus and sapien dolor
                  an ultrice ipsum aliquam undo congue dolor cursus purus congue
                  and ipsum purus sapien a blandit
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSolutionsSection;
