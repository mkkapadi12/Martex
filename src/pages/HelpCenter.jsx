import React from "react";
import Navbar from "./../components/Navbar";
import logoblue from "./../assets/images/logo-blue.png";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./../components/ui/tabs";
import {
  helpitems1,
  helpitems2,
  helpitems3,
  helpitems4,
  helpTabs,
} from "./../Data/helpTabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./../components/ui/accordion";
import SmallFaq from "../components/SmallFaq";
import Footer from "./../components/Footer";

const HelpCenter = () => {
  const data = {
    logo: logoblue,
    logoscroll: logoblue,
    bg: "bg-white",
    link_color: "text-martex-dark_text",
    btn_color: "bg-[#1680fb]",
    btn_text: "Get Started",
    text: "text-martex-dark_text",
  };

  const faq = {
    title: "Still need help?",
    btn_text: "Ask your question here",
  };

  return (
    <main className="help-center">
      <section
        className=""
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(244, 244, 249, 0.8) 50%, rgba(244, 244, 249, 0.05) 100%)",
        }}
      >
        <Navbar data={data} />
        <section className="xl:max-w-[1080px] mx-auto px-2 sm:px-10 xl:px-2 pt-[140px] sm:pt-[150px] container xl:pt-[180px] pb-[100px]">
          <div className="">
            {/* text */}
            <div className="mt-6 mb-10 text-3xl font-bold text-center sm:mb-16 xl:mb-20 sm:text-5xl xl:text-6xl text-martex-dark_text">
              <h1 className="">How Can We Help?</h1>
            </div>
            {/* Tabs */}
            <div className="relative top-0 px-2 xl:px-0">
              <Tabs defaultValue="getting-started" className="w-full">
                {/* Tabs Header */}
                <TabsList className="flex flex-col w-full h-auto gap-6 bg-transparent sm:flex-row sm:px-2 xl:px-12">
                  {helpTabs.map((tab) => {
                    const Icon = tab.icon;

                    return (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="
                        flex-1 h-auto w-full py-5 xl:py-8 rounded-2xl border border-martex-dim_text flex flex-col items-center justify-center gap-3 text-martex-dim_text data-[state=active]:bg-martex-light_blue data-[state=active]:text-white data-[state=active]:shadow-xl"
                      >
                        <Icon className="w-12 h-12" />
                        <span className="text-base font-medium sm:text-lg">
                          {tab.title}
                        </span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {/* Content */}
                <TabsContent value="getting-started" className="mt-10">
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-1"
                    className=""
                  >
                    {helpitems1.map((item) => (
                      <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger className="sm:text-xl text-[22px] xl:text-[26px] font-semibold hover:no-underline text-martex-dark_text">
                          {item.trigger}
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4">
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
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="account" className="mt-10">
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-1"
                    className=""
                  >
                    {helpitems2.map((item) => (
                      <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger className="sm:text-xl text-lg text-[22px] xl:text-[26px] font-semibold hover:no-underline text-martex-dark_text">
                          {item.trigger}
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4">
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
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="pricing" className="mt-10">
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-1"
                    className=""
                  >
                    {helpitems3.map((item) => (
                      <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger className="sm:text-xl text-lg text-[22px] xl:text-[26px] font-semibold hover:no-underline text-martex-dark_text">
                          {item.trigger}
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4">
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
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="questions" className="mt-10">
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="item-1"
                    className=""
                  >
                    {helpitems4.map((item) => (
                      <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger className="sm:text-xl text-lg text-[22px] xl:text-[26px] font-semibold hover:no-underline text-martex-dark_text">
                          {item.trigger}
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4">
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
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        {/* faq section */}
        <SmallFaq faq={faq} />
        {/* Footer */}

        <Footer logo={logoblue} />
      </section>
    </main>
  );
};

export default HelpCenter;
