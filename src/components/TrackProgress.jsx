import React from "react";
import dashboard from "../assets/images/dashboard-01.png";

const TrackProgress = () => {
  return (
    <section className="pt-16 pb-10 xl:pb-12 bg-slate-100">
      <div className="container px-3 mx-auto sm:px-6">
        <div className="mx-auto max-w-[1300px]">
          {/* text */}
          <div className="space-y-4">
            <h2 className="max-w-4xl !leading-tight font-bold text-center mx-auto text-3xl sm:text-[44px] xl:text-6xl text-martex-dark_text">
              Track the progress towards <br className="hidden sm:block" />{" "}
              objectives with key results
            </h2>
            <p className="text-xl text-center text-martex-light_text xl:text-[26px]">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </div>
          {/* image */}
          <div className="mt-16 sm:px-3 xl:px-0">
            <img
              src={dashboard}
              alt="Dashboard showing progress tracking"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackProgress;
