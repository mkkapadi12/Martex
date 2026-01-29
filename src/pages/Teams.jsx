import React from "react";
import Navbar from "./../components/Navbar";
import logoblue from "./../assets/images/logo-blue.png";
import { jobsData, teamsData } from "./../Data/testimonialsData";
import { Facebook, Twitter } from "lucide-react";
import { Button } from "./../components/ui/button";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";

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
        <div className="xl:max-w-[1300px] container mx-auto sm:px-10 xl:px-2 pb-16">
          <div
            className="xl:px-2 mt-[30px] bg-no-repeat bg-cover sm:rounded-xl md:pl-[60px] xl:pl-[80px] pt-[55px] sm:pt-0 sm:px-0 px-[25px]"
            style={{
              backgroundImage: `url("https://martex-tailwindcss.ibthemespro.com/images/bg-05.jpg")`,
              position: "center center",
            }}
          >
            <div className="flex flex-col sm:flex-row">
              {/* details */}
              <div className="flex sm:text-start text-center gap-4 flex-col items-center sm:items-start justify-center md:max-lg:w-7/12 lg:max-xl:w-7/12 xl:w-7/12 w-full flex-[0_0_auto] sm:px-[calc(0.5*_1.5rem)] max-w-full">
                <h1 className="text-3xl sm:text-[40px] xl:text-[50px] sm:pr-[10%] !leading-tight font-semibold text-white ">
                  We are looking for talented individuals
                </h1>
                <p className="max-w-md xl:max-w-xl text-lg xl:text-[21px] text-white">
                  We're constantly looking for talented people to join our team.
                  Don't hesitate to get in touch with us
                </p>
                <Button className="py-6 text-base font-semibold text-white transition-all duration-300 border rounded-sm text xl:text-lg px-7 bg-martex-light_blue hover:bg-transparent border-martex-light_blue hover:border-white">
                  See open roles
                </Button>
              </div>
              {/* image */}
              <div className="xl:m-[-40px_-20px_-30px_-40px] sm:m-[-30px_-20px_-20px_-40px] m-[35px_0_-40px_0] md:w-5/12 lg:max-xl:w-5/12 xl:w-5/12 w-full flex-[0_0_auto] px-[calc(0.5*_1.5rem)] max-w-full">
                <img
                  src={
                    "https://martex-tailwindcss.ibthemespro.com/images/img-16.png"
                  }
                  alt="cartoon"
                />
              </div>
            </div>
          </div>
        </div>
        {/* jobs data */}
        <div className="xl:max-w-[1300px] container mx-auto sm:px-6 xl:px-2 xl:py-16">
          <div className="">
            {/* text */}
            <div className="space-y-5 text-center">
              <h1 className="text-3xl font-semibold sm:text-5xl xl:text-6xl text-martex-dark_text">
                Open Roles at Martex
              </h1>
              <p className="mx-auto sm:text-lg xl:text-[20px] text-martex-light_text sm:px-0 px-4 sm:max-w-2xl xl:max-w-3xl">
                We’re building a better way to work, fueled by transparency,
                trust, and technology that is a force for positive change for
                the hourly workforce
              </p>
            </div>
            <div className="pt-10">
              <div className="grid grid-cols-1 gap-8 px-3 sm:grid-cols-2 sm:px-0">
                {/* job details */}
                {jobsData.map((data) => {
                  return (
                    <div
                      key={data.id}
                      className="sm:text-start text-center bg-[#f7f8f9] p-[25px_30px] sm:p-[25px_25px] lg:p-[25px_35px] rounded-[10px] space-y-2 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-[15px] font-semibold uppercase text-martex-light_text">
                        {data.department}
                      </span>
                      <h2 className="text-xl font-semibold text-martex-dark_text xl:text-2xl">
                        {data.title}
                      </h2>
                      <h3 className="text-base sm:text-[14px] xl:text-lg text-martex-light_text">
                        {data.location + " / " + data.type}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
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
