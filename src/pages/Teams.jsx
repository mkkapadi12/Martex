import React from "react";
import Navbar from "./../components/Navbar";
import logoblue from "./../assets/images/logo-blue.png";
import { teamsData } from "./../Data/testimonialsData";
import { Facebook, Twitter } from "lucide-react";
import { Button } from "./../components/ui/button";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";
import { JobsOpen } from "../components/JobsOpen";
import { HiringPoster } from "../components/HiringPoster";

const Teams = () => {
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
    <main className="teams">
      <section
        className=""
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(244, 244, 249, 0.8) 50%, rgba(244, 244, 249, 0.05) 100%)",
        }}
      >
        <Navbar data={data} />
        <section className="xl:max-w-[1300px] mx-auto px-2 sm:px-10 xl:px-2 pt-[140px] sm:pt-[150px] container xl:pt-[180px] sm:pb-[100px]">
          {/* text */}
          <div className=" sm:max-w-3xl xl:max-w-4xl mx-auto mt-4 sm:mt-2 mb-10 text-3xl font-bold tracking-tight !leading-tight text-center sm:mb-12 md:mb-14 xl:mb-20 sm:text-5xl xl:text-6xl text-martex-dark_text">
            <h1 className="">All we do is dream and craft amazing products</h1>
          </div>
          <div className="pb-20 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-12 sm:grid-cols-2 md:grid-cols-3">
              {teamsData.map((team) => {
                return (
                  <div className="flex flex-col items-start justify-between gap-6 px-1 sm:px-0">
                    {/* image */}
                    <div className="xl:px-1">
                      <img
                        src={team.img}
                        alt={"image" + team.id}
                        className="rounded-[14px]"
                      />
                    </div>
                    {/* details */}
                    <div className="relative w-full px-2 xl:space-y-1 xl:px-3">
                      <h2 className="text-xl font-semibold text-martex-dark_text xl:text-2xl">
                        {team.name}
                      </h2>
                      <h3 className="text-lg xl:text-xl text-martex-light_text">
                        {team.role}
                      </h3>
                      {/* icons */}
                      <div className="absolute top-0 flex gap-4 right-2 text-martex-light_text">
                        <span>
                          <Facebook className="xl:w-6 sm:w-[22px]" />
                        </span>
                        <span>
                          <Twitter className="xl:w-6 sm:w-[22px]" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* advertisment */}
        <HiringPoster />
        {/* jobs data */}
        <JobsOpen />
        {/* poster */}
        <div className="py-16">
          <div className="text-center space-y-7">
            <h1 className="font-semibold text-3xl sm:text-[40px] xl:text-[53px] text-martex-dark_text">
              We can't wait to meet you
            </h1>
            <div>
              <Link to="mailto:hello@yourdomain.com">
                <Button className="px-7 py-6 text-lg font-semibold transition-all duration-300 rounded-[4px] text-white bg-martex-light_blue hover:bg-martex-dark_blue">
                  hello@yourdomain.com
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer logo={logoblue} />
      </section>
    </main>
  );
};

export default Teams;
