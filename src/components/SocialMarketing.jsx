import React from "react";
import f1 from "../assets/images/f_06.png";
import f2 from "../assets/images/f_04.png";

export default function SocialMarketing() {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-[#353f4f] max-w-4xl mx-auto">
          Reach your audience through social media marketing
        </h2>
        <p className="text-[#757575] text-lg sm:text-2xl mt-4">
          Ligula risus auctor tempus magna feugiat lacinia.
        </p>
      </div>

      <div className="grid gap-8 px-6 mx-auto md:grid-cols-2 max-w-7xl">
        <div className="p-5 text-center bg-gray-100 md:p-16 rounded-2xl">
          <h3 className="text-xl sm:text-3xl font-semibold text-[#353f4f] mb-4">
            Marketing Integrations
          </h3>
          <p className="text-[#6c757d] mb-6">
            Aliquam a augue suscipit luctus diam neque
          </p>
          <img src={f1} alt="marketing" className="mx-auto" />
        </div>

        <div className="p-5 text-center bg-gray-100 md:p-16 rounded-2xl">
          <img src={f2} alt="productivity" className="mx-auto mb-6" />
          <h3 className="text-xl sm:text-3xl font-semibold text-[#353f4f]">
            Productivity Focused
          </h3>
          <p className="text-[#6c757d]">
            Aliquam a augue suscipit luctus diam neque
          </p>
        </div>
      </div>
    </section>
  );
}
