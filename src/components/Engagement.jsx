import React from "react";
import Enhance from "../assets/images/img-10.png";
import Solution from "../assets/images/img-06.png";

export default function Engagement() {
  return (
    <section className="py-16 sm:px-6">
      <div className="grid items-center grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-2 max-w-7xl">
        <img src={Enhance} alt="engagement" />

        <div>
          <span className="uppercase font-bold text-sm text-[#6c757d]">
            Enhance Engagement
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#353f4f] my-4">
            Engage your most valuable visitors
          </h2>
          <p className="text-[#6c757d] mb-4 text-xl">
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>

          <h2 className="text-2xl font-bold text-[#353f4f] my-4">
            Digits that define growth
          </h2>

          <ul className="list-disc pl-5 text-[#6c757d]">
            <li className="text-lg">
              Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an
              ultrice ipsum aliquam undo congue cursus dolor
            </li>
            <li className="text-lg">
              Purus suscipit cursus vitae cubilia magnis volute egestas vitae
              sapien turpis ultrice auctor congue magna placerat
            </li>
          </ul>
        </div>
      </div>
      <div className="grid items-center grid-cols-1 gap-8 px-4 py-6 mx-auto sm:px-6 sm:grid-cols-2 max-w-7xl">
        <div className="order-2 sm:order-1">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#353f4f] mb-4">
            Solution that grows with you
          </h2>
          <p className="text-[#6c757d] mb-4 md:text-xl text-lg">
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold text-[#353f4f] mb-4">
            Connect your data sources
          </h2>
          <p className="text-[#6c757d] mb-4 md:text-xl text-lg">
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>

          <ul className="list-disc pl-5 text-[#6c757d]">
            <li className="text-lg">
              Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an
              ultrice ipsum aliquam undo congue cursus dolor
            </li>
            <li className="text-lg">
              Purus suscipit cursus vitae cubilia magnis volute egestas vitae
              sapien turpis ultrice auctor congue magna placerat
            </li>
          </ul>
        </div>
        <div className="order-1 sm:order-2">
          <img src={Solution} alt="solution" />
        </div>
      </div>
    </section>
  );
}
