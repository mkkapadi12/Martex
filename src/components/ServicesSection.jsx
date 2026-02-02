import React from "react";
import Services from "./../pages/About/components/Services";

const ServicesSection = ({ services_data }) => {
  const { title, services } = services_data;
  return (
    <section className="py-10 xl:py-12">
      <div className="mx-auto max-w-[1350px]">
        <div className="container px-3 mx-auto sm:px-6">
          {/* title */}
          <div className="px-3 mx-auto text-center sm:max-w-3xl xl:max-w-5xl">
            <h1 className="xl:text-6xl text-martex-dark_text font-semibold mb-4 !leading-tight sm:text-5xl text-3xl">
              {title}
            </h1>
            <span className="text-xl text-martex-light_text md:text-xl xl:text-2xl sm:text-lg">
              Ligula risus auctor tempus magna feugiat lacinia.
            </span>
          </div>
          {/* services map */}
          <Services services={services} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
