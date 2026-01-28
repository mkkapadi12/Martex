import React from "react";
import f2 from "../assets/images/img-03.png";
import { Button } from "./ui/button";

const SmarterWayToWork = () => {
  return (
    <section className="py-10 xl:py-12">
      <div className="container px-3 mx-auto sm:px-6">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid items-center justify-center grid-cols-1 gap-6 lg:grid-cols-2">
            {/* image */}
            <div className="p-2 xl:px-3">
              <img src={f2} alt="smarter way to work" />
            </div>
            {/* content */}
            <div className="order-1 space-y-4 xl:space-y-6 lg:order-2 xl:px-3">
              <h2 className="text-xl font-semibold sm:text-2xl xl:text-3xl text-martex-dark_text">
                The smarter way to work
              </h2>

              <p className="text-base leading-relaxed xl:text-lg text-martex-light_text">
                Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
                neque auctor turpis vitae dolor luctus placerat magna and ligula
                cursus purus vitae purus an ipsum suscipit
              </p>

              <h3 className="text-xl font-bold sm:text-2xl xl:text-3xl text-martex-dark_text">
                Full access to all features
              </h3>

              <ul className="ml-5 space-y-6 text-base list-disc xl:text-lg text-martex-light_text">
                <li className="">
                  Cursus purus suscipit vitae cubilia magnis volute egestas
                  vitae sapien turpis sodales magna undo aoreet primis
                </li>
                <li className="">
                  Tempor sapien quaerat an ipsum laoreet purus and sapien dolor
                  an ultrice ipsum aliquam undo congue dolor cursus purus congue
                  and ipsum purus sapien a blandit
                </li>
              </ul>

              <Button className="px-5 py-[18px] text-base font-semibold duration-300 bg-transparent border-2 rounded-[6px] xl:py-6 xl:text-lg xl:px-7 border-martex-dark_text hover:bg-martex-light_pink hover:border-martex-light_pink text-martex-dark_text hover:text-white">
                What's possible?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmarterWayToWork;
