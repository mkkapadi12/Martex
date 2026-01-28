import React from "react";
import { BarChart3, Target, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Market Research",
    description: "Luctus augue egestas undo ultrice and quisque lacus",
  },
  {
    icon: Zap,
    title: "User Experience",
    description: "Luctus augue egestas undo ultrice and quisque lacus",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Luctus augue egestas undo ultrice and quisque lacus",
  },
  {
    icon: BarChart3,
    title: "SEO Services",
    description: "Luctus augue egestas undo ultrice and quisque lacus",
  },
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:px-0 px-5 sm:text-5xl xl:text-6xl md:text-[46px] !leading-snug font-semibold text-martex-dark_text mb-4">
          Build a customer-centric <br className="hidden sm:block"/> marketing strategy
        </h2>
        <p className="px-6 text-lg sm:py-5 sm:px-0 sm:text-xl xl:py-6 xl:text-2xl text-martex-light_text">
          Ligula risus auctor tempus magna feugiat lacinia.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mx-auto sm:max-w-5xl xl:container xl:px-2 sm:px-10 sm:grid-cols-2 md:grid-cols-4 xl:max-w-7xl">
        {features.map((item, i) => (
          <div key={i} className="px-8 text-center sm:px-0">
            <div>
              <item.icon className="mx-auto mb-4 md:max-xl:h-12 md:w-12 h-14 w-14 text-martex-light_pink md:max-xl:w-12" />
            </div>
            <h3 className="mt-4 text-xl font-semibold xl:text-2xl text-martex-dark_text">
              {item.title}
            </h3>
            <p className="mt-2 xl:text-lg text-martex-light_text">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
