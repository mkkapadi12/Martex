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
        <h2 className="text-3xl sm:text-5xl lg:text-6xl md:text-[46px] font-semibold text-[#353f4f] mb-4">
          Build a customer-centric <br /> marketing strategy
        </h2>
        <p className="text-[#757575] text-2xl py-6">
          Ligula risus auctor tempus magna feugiat lacinia.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 px-6 mx-auto sm:grid-cols-2 md:grid-cols-4 max-w-7xl">
        {features.map((item, i) => (
          <div key={i} className="text-center">
            <div>
              <item.icon className="w-12 h-12 mx-auto text-[#f74780] mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-[#353f4f] mt-4">
              {item.title}
            </h3>
            <p className="text-[#757575]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
