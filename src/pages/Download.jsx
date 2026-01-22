import Navbar from "./../components/Navbar";
import React from "react";
import logoblue from "./../assets/images/logo-blue.png";
import { latestVersion, olderVersion } from "../Data/Version";
import { Button } from "./../components/ui/button";
import { MoveDown } from "lucide-react";
import Footer from "./../components/Footer";
import SmallFaq from "../components/SmallFaq";

const Download = () => {
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
    title: "Any questions?",
    btn_text: "Read the FAQs",
  };

  return (
    <main className="download">
      <section>
        <Navbar data={data} />
        <section
          className="xl:pt-[180px] lg:max-xl:pt-[160px] mx-auto pt-[160px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(244,244,249,0.8) 50%,rgba(244,244,249,0.05) 100%)",
          }}
        >
          <div className="xl:max-w-[1080px] mx-auto xl:px-0 px-4 sm:px-4 sm:max-w-4xl">
            {/* latest Version */}
            <div className="pb-8">
              <div className="mb-6 sm:mb-5 xl:mb-10">
                <h1 className="text-2xl font-semibold sm:text-3xl xl:text-4xl text-martex-dark_text">
                  Latest Version
                </h1>
              </div>
              <div>
                {latestVersion.map((item) => {
                  return (
                    <div key={item.id} className="relative">
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="flex items-end justify-start gap-2 space-x-4">
                          <h2 className="text-2xl sm:text-3xl xl:text-4xl text-martex-dark_text">
                            {item.version}
                          </h2>
                          <h3 className="text-lg xl:text-[22px] text-martex-light_text">
                            {item.releaseDate}
                          </h3>
                          <h4 className="text-lg xl:text-[22px] font-bold text-martex-dark_text">
                            {item.size}
                          </h4>
                        </div>
                        {/* Download btn */}
                        <div className="sm:absolute right-0 sm:top-[-13px] xl:top-[-9px]">
                          <Button className="!px-6 font-semibold py-6 rounded-md text-base xl:text-lg transition-all duration-500 border shadow-none bg-martex-light_blue hover:bg-transparent hover:text-martex-dark_text bg-none border-martex-light_blue hover:border-martex-light_text">
                            <MoveDown size={34} /> Download {item.version}
                          </Button>
                        </div>
                      </div>

                      <hr className="my-6 xl:my-10" />
                      <ul className="ml-4 space-y-2 list-disc sm:text-base xl:text-lg text-martex-light_text">
                        {item.platforms.map((platform, index) => {
                          return <li key={index}>{platform}</li>;
                        })}
                        {item.notes.map((note, index) => {
                          return <li key={index}>{note}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Older Versiion */}
            <div className="py-10">
              <div className="mb-7 sm:mb-10">
                <h1 className="text-2xl font-semibold sm:text-3xl xl:text-4xl text-martex-dark_text">
                  Older Version
                </h1>
              </div>
              <div className="space-y-6">
                {olderVersion.map((item) => {
                  return (
                    <div key={item.id} className="relative pb-10">
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="flex items-end justify-start gap-2 space-x-4">
                          <h2 className="text-2xl sm:text-3xl xl:text-4xl text-martex-dark_text">
                            {item.version}
                          </h2>
                          <h3 className="text-lg xl:text-[22px] text-martex-light_text">
                            {item.releaseDate}
                          </h3>
                          <h4 className="text-lg xl:text-[22px] font-bold text-martex-dark_text">
                            {item.size}
                          </h4>
                        </div>
                        {/* Download btn */}
                        <div className="sm:absolute sm:top-[-13px] xl:top-[-9px] right-0">
                          <Button className="!px-6 font-semibold py-6 rounded-md text-base xl:text-lg transition-all duration-500 hover:text-white border shadow-none hover:bg-martex-dark_blue bg-transparent text-martex-dark_text bg-none hover:border-martex-dark_blue border-martex-light_text">
                            <MoveDown size={34} /> Download {item.version}
                          </Button>
                        </div>
                      </div>
                      <hr className="my-6 xl:my-8" />
                      <ul className="ml-4 space-y-2 list-disc sm:text-base xl:text-lg text-martex-light_text">
                        {item.notes.map((note, index) => {
                          return <li key={index}>{note}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Faq Section */}
          <SmallFaq faq={faq} />
        </section>

        <Footer logo={logoblue} />
      </section>
    </main>
  );
};

export default Download;
