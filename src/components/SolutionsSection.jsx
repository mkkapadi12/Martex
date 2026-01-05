import React from "react";
import f1 from "../assets/images/f_01.png";
import f5 from "../assets/images/f_05.png";
import f2 from "../assets/images/f_02.png";

const SolutionCard = ({ image, title, description }) => {
  return (
    <div className="p-10 text-center transition-all duration-300 bg-white shadow-sm rounded-2xl hover:shadow-md">
      <div className="flex justify-center mb-6">
        <img src={image} alt={title} className="max-w-[220px] w-full" />
      </div>

      <h3 className="text-xl font-bold text-[#353f4f] mb-3">{title}</h3>

      <p className="text-[#6c757d] leading-relaxed">{description}</p>
    </div>
  );
};

export default function SolutionsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl px-6 mx-auto mb-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#353f4f] mb-4">
          The Complete Solutions
        </h2>
        <p className="text-lg text-[#6c757d]">
          Ligula risus auctor tempus magna feugiat lacinia.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 px-6 mx-auto md:grid-cols-3 max-w-7xl">
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
    </section>
  );
}
