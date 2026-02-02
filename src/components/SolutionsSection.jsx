import React from "react";
import f1 from "../assets/images/f_01.png";
import f5 from "../assets/images/f_05.png";
import f2 from "../assets/images/f_02.png";

const SolutionCard = ({ image, title, description }) => {
  return (
    <div
      className="p-10 text-center transition-all duration-300 sm:p-6 xl:p-8 space-y-7 rounded-2xl"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(244,244,249,0.8) 50%,rgba(244,244,249,0.05) 100%)",
      }}
    >
      {/* image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="sm:max-w-[225px] xl:max-w-[250px] w-full"
        />
      </div>
      {/* text */}
      <div className="space-y-5">
        <h3 className="text-xl font-bold xl:text-2xl text-martex-dark_text">
          {title}
        </h3>
        <p className="leading-relaxed xl:text-lg text-martex-light_text">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function SolutionsSection({ title }) {
  return (
    <section className="py-10 xl:py-12">
      <div className="container px-3 mx-auto sm:px-6">
        <div className="max-w-[1300px] mx-auto space-y-10 sm:space-y-20">
          {/* text */}
          <div className="max-w-4xl mx-auto space-y-5 text-center sm:px-6 xl:space-y-7">
            <h2 className="text-3xl font-bold sm:text-5xl xl:text-6xl text-martex-dark_text">
              {title}
            </h2>
            <p className="text-xl xl:text-2xl text-martex-light_text">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 gap-6 xl:gap-10 mx-auto md:grid-cols-3 max-w-[1300px] xl:px-0 sm:px-5">
            <SolutionCard
              image={f1}
              title="Intuitive Dashboard"
              description="Luctus egestas augue undo ultrice aliquam in lacus congue dapibus"
            />

            <SolutionCard
              image={f5}
              title="Effortless Integration"
              description="Tempor laoreet augue undo ultrice aliquam in lacus luctus feugiat"
            />

            <SolutionCard
              image={f2}
              title="Engagement Analysis"
              description="Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
