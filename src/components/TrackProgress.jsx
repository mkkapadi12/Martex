import React from "react";
import dashboard from "../assets/images/dashboard-01.png";

const TrackProgress = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-martex-dark_text mb-6 max-w-4xl mx-auto text-center">
            Track the progress towards objectives with key results
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-center text-gray-600 sm:text-xl">
            Ligula risus auctor tempus magna feugiat lacinia.
          </p>
        </div>
        <div className="mt-12">
          <img
            src={dashboard}
            alt="Dashboard showing progress tracking"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TrackProgress;
