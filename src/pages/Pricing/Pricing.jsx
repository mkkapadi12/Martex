import React from "react";
import Navbar from "../../components/Navbar";
import logoblue from "../../assets/images/logo-blue.png";
import Company from "../../components/Company";
import PricingSection from "../Pricing/components/PricingSection";
import { Switch } from "../../components/ui/switch";
import FAQSection from "../../components/FAQSection";
import CTASection from "../../components/CTASection";
import bg from "../../assets/images/bg-05.jpg";
import Footer from "../../components/Footer";
import PricingComparisonTable from ".././Pricing/components/PricingComparisonTable";

const Pricing = () => {
  const data = {
    logo: logoblue,
    logoscroll: logoblue,
    bg: "bg-white",
    link_color: "text-martex-dark_text",
    btn_color: "bg-[#1680fb]",
    btn_text: "Get Started",
    text: "text-martex-dark_text",
  };

  const cta_data = {
    btn_color: "bg-[#1680fb]",
    btn_text: "Get started – it's free",
    title: "Give it a try, it's free!",
    bg: bg,
  };

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(244,244,249,0.8) 50%,rgba(244,244,249,0.05) 100%)",
      }}
    >
      <Navbar data={data} />
      <section className="px-4 pt-20 mx-auto max-w-[1350px]">
        <div className="container mx-auto">
          <div className="pt-20 text-center">
            <h1 className="my-6 text-3xl font-bold md:text-5xl xl:text-6xl text-martex-dark_text">
              Simple, Flexible Pricing
            </h1>
            <p className="flex items-center justify-center mx-auto text-lg text-martex-light_text md:text-xl xl:text-2xl w-fit">
              Billed monthly
              <span>
                <Switch className="w-12 mx-3 h-7" />
              </span>
              Billed yearly
            </p>
            <span className="text-[#1680fb] text-lg mt-4 inline-block">
              Save up to 35% with yearly billing
            </span>
          </div>
          <PricingSection />
        </div>
      </section>
      <Company title={"Trusted and used by over 3,400 companies"} />
      <PricingComparisonTable />
      <FAQSection get_color={"text-[#1680fb]"} />
      <CTASection cta_data={cta_data} />
      <Footer logo={logoblue} />
    </main>
  );
};

export default Pricing;
