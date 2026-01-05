import React from "react";
import f2 from "../assets/images/img-02.png";

const SmarterWayToWork = () => {
  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <img src={f2} alt="smarter way to work" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#353f4f] mb-6">
              The smarter way to work
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus vitae purus an ipsum suscipit
            </p>

            <h3 className="text-2xl font-bold text-[#353f4f] mb-6">
              Full access to all features
            </h3>

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

            <button className="inline-flex items-center px-8 py-3 border-2 border-[#f74780] rounded-md text-base font-semibold text-[#f74780] hover:bg-[#f74780] hover:text-white transition-colors duration-300">
              What's possible?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmarterWayToWork;
