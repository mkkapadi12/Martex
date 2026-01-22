import React from "react";
import Navbar from "./../components/Navbar";
import logoblue from "./../assets/images/logo-blue.png";
import {
  faqs,
  helpitems1,
  helpitems2,
  helpitems3,
  helpitems4,
} from "../Data/helpTabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import Footer from "./../components/Footer";

const FAQs = () => {
  const data = {
    logo: logoblue,
    logoscroll: logoblue,
    bg: "bg-white",
    link_color: "text-martex-dark_text",
    btn_color: "bg-[#1680fb]",
    btn_text: "Get Started",
    text: "text-martex-dark_text",
  };

  return (
    <main className="faqs">
      <section
        className=""
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(244, 244, 249, 0.8) 50%, rgba(244, 244, 249, 0.05) 100%)",
        }}
      >
        <Navbar data={data} />
        <section className="xl:max-w-[1080px] mx-auto px-4 sm:px-5 xl:px-0 pt-[140px] sm:pt-[150px] xl:pt-[170px] pb-[60px] xl:pb-[100px] sm:max-w-4xl">
          {/* text */}
          <div className="mt-6 mb-5 space-y-4 text-center sm:mb-10 xl:mb-16">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl text-martex-dark_text">
              Questions & Answers
            </h1>
            <h2 className="font-medium text-[19px] xl:text-2xl text-martex-light_text">
              Some common questions we get <br className="block sm:hidden"/> about Martex
            </h2>
          </div>
          {/* Que & Ans */}
          <div className="">
            {faqs.map((faq, index) => {
              return (
                <Accordion type="single" collapsible className="" key={index}>
                  <AccordionItem value={faq}>
                    <AccordionTrigger className="text-xl sm:text-[26px] xl:text-[34px] font-semibold hover:no-underline text-martex-dark_text sm:mb-2 xl:mb-4 !py-5">
                      {faq}
                    </AccordionTrigger>
                    {helpitems1.map((item) => (
                      <AccordionContent className="mt-6 space-y-4">
                        <h1 className="sm:text-xl text-[22px] xl:text-[26px] font-semibold hover:no-underline text-martex-dark_text">
                          {item.trigger}
                        </h1>
                        {item.content.map((desc, index) => {
                          return (
                            <p
                              key={index}
                              className="text-base/7 xl:text-lg/7 text-martex-light_text"
                            >
                              {desc}
                            </p>
                          );
                        })}
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>

          {/* Get in Touch */}
          <div className="flex items-center w-full gap-2 mt-8">
            <div className="flex rounded-full gap-1 mx-auto text-center bg-[#f4f4f9] px-10 py-4">
              <span className="text-base sm:text-xl xl:text-2xl text-martex-light_text">
                Have any questions?
              </span>
              <div>
                <button
                  className={`text-base sm:text-xl xl:text-2xl text-martex-light_blue underline font-bold hover:text-martex-dark_text transition-all duration-300`}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer logo={logoblue} />
      </section>
    </main>
  );
};

export default FAQs;
