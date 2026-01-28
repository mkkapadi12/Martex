import React from "react";
import Enhance from "../assets/images/img-10.png";
import Solution from "../assets/images/img-06.png";

export default function Engagement() {
  return (
    <section className="py-10 xl:py-12">
      <div className="grid items-center grid-cols-1 gap-8 px-2 py-10 mx-auto sm:py-5 sm:px-9 xl:px-4 md:grid-cols-2 sm:max-w-5xl xl:max-w-7xl">
        {/* img */}
        <div className="px-3 sm:px-0">
          <img src={Enhance} alt="engagement" />
        </div>
        {/* content */}
        <div className="px-2 space-y-4 sm:space-y-5 xl:space-y-6 sm:px-0">
          <span className="text-sm font-bold uppercase xl:text-base text-martex-light_text">
            Enhance Engagement
          </span>
          <h2 className="text-[28px] font-bold sm:text-[42px] xl:text-[53px] !leading-tight text-martex-dark_text">
            Engage your most valuable visitors
          </h2>
          <p className="xl:text-xl/8 text-martex-light_text">
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>
          <h2 className="text-[22px] font-bold xl:text-3xl text-martex-dark_text">
            Digits that define growth
          </h2>
          <ul className="pl-5 space-y-4 list-disc text-martex-light_text">
            <li className="text-base xl:text-xl">
              Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an
              ultrice ipsum aliquam undo congue cursus dolor
            </li>
            <li className="text-base xl:text-xl">
              Purus suscipit cursus vitae cubilia magnis volute egestas vitae
              sapien turpis ultrice auctor congue magna placerat
            </li>
          </ul>
        </div>
      </div>
      <div className="grid items-center grid-cols-1 gap-8 px-2 py-10 mx-auto sm:py-5 sm:px-9 xl:px-4 md:grid-cols-2 xl:max-w-7xl sm:max-w-5xl">
        <div className="order-2 px-2 space-y-4 sm:space-y-5 sm:order-1 xl:space-y-6">
          <h2 className="font-semibold  sm:text-[22px] text-xl xl:text-3xl text-martex-dark_text">
            Solution that grows with you
          </h2>
          <p className="text-base text-martex-light_text xl:text-lg">
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>

          <h2 className="sm:text-[22px] text-xl xl:text-3xl font-semibold text-martex-dark_text">
            Connect your data sources
          </h2>
          <p className="text-base text-martex-light_text xl:text-lg">
            Tempor sapien sodales quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus an ipsum vitae suscipit purus
          </p>

          <ul className="pl-5 space-y-4 list-disc text-martex-light_text">
            <li className="text-base xl:text-lg">
              Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
              ultrice ipsum aliquam undo congue dolor cursus
            </li>
            <li className="text-base xl:text-lg">
              Cursus purus suscipit vitae cubilia magnis volute egestas vitae
              sapien turpis ultrice auctor congue magna placerat
            </li>
          </ul>
        </div>
        <div className="order-1 px-3 sm:order-2 sm:px-0">
          <img src={Solution} alt="solution" />
        </div>
      </div>
    </section>
  );
}
