import React from "react";
import Navbar from "./../components/Navbar";
import logoblue from "./../assets/images/logo-blue.png";
import logowhite from "./../assets/images/logo-white.png";
import a21 from "./../assets/images/about/a2-1.jpg";
import a22 from "./../assets/images/about/a2-2.jpg";
import a23 from "./../assets/images/about/a2-3.jpg";
import a24 from "./../assets/images/about/a2-4.jpg";
import { Play } from "lucide-react";
import ServicesSection from "../components/ServicesSection";
import { services_careers } from "../Data/servicesdata";
import { JobsOpen } from "../components/JobsOpen";
import { HiringPoster } from "../components/HiringPoster";
import Footer from "../components/Footer";

const Careers = () => {
  const data = {
    logo: logowhite,
    logoscroll: logoblue,
    link_color: "!text-white",
    btn_color: "bg-[#1680fb]",
    btn_text: "Get Started",
    text: "text-white",
  };
  const services_data = {
    title: "Benefits and Perks",
    services: services_careers,
  };
  return (
    <section>
      <Navbar data={data} />
      {/* Hero */}
      <section
        className="bg-fixed bg-no-repeat bg-cover bg-[center_center] pt-[150px] lg:max-xl:pt-[120px] md:max-lg:pt-[60px] md:max-lg:mt-[80px]"
        style={{
          backgroundImage: `url("https://martex-tailwindcss.ibthemespro.com/images/bg-01.jpg")`,
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="container px-3 mx-auto sm:px-6 xl:px-0">
            <div className="grid items-center grid-cols-1 gap-8 sm:grid-cols-2">
              {/* content */}
              <div className="space-y-5 sm:px-3 xl:px-0">
                <div className="inline-block px-5 xl:px-6 xl:py-1 bg-[#ffffff26] rounded-full">
                  <span className="text-sm font-semibold text-white uppercase xl:text-base">
                    careers
                  </span>
                </div>
                <h1 className="font-semibold text-3xl text-white md:text-[52px] xl:text-[64px] !leading-tight">
                  We are looking for creative and fun individuals
                </h1>
                <p className="text-base/7 sm:text-lg text-white xl:text-[21px]/8 ">
                  Sodales tempor sapien quaerat ipsum congue undo laoreet turpis
                  neque auctor turpis vitae dolor luctus placerat magna ipsun
                  ligula purus cursus
                </p>
              </div>
              {/* image */}
              <div className="sm:px-3 xl:px-0">
                <img
                  src="https://martex-tailwindcss.ibthemespro.com/images/img-18.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Results */}
      <section className="py-10 xl:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="container px-3 mx-auto sm:px-6 xl:px-0">
            <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
              <div className="space-y-5 md:text-base xl:text-lg text-martex-light_text">
                <h3 className="text-xl font-semibold md:text-2xl xl:text-3xl text-martex-dark_text">
                  Mission and impact
                </h3>
                <p className="">
                  Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
                  neque auctor turpis vitae dolor luctus placerat magna and
                  ligula cursus purus vitae purus an ipsum suscipit
                </p>
                <ul className="ml-5 space-y-6 list-disc">
                  <li>
                    Tempor sapien quaerat an ipsum laoreet purus and sapien
                    dolor an ultrice ipsum aliquam undo congue dolor cursus
                  </li>
                  <li>
                    Cursus purus suscipit vitae cubilia magnis volute egestas
                    vitae sapien turpis ultrice auctor congue magna placerat
                  </li>
                </ul>
              </div>
              <div className="space-y-5 md:text-base xl:text-lg text-martex-light_text">
                <h3 className="text-xl font-semibold md:text-2xl xl:text-3xl text-martex-dark_text">
                  We deliver results
                </h3>
                <p className="">
                  Nemo ipsam egestas volute turpis egestas ipsum and purus
                  sapien ultrice an aliquam quaerat ipsum augue turpis sapien
                  cursus congue magna purus quaerat at ligula purus egestas
                  magna cursus undo varius purus magnis sapien quaerat
                </p>
                <p>
                  Egestas volute nemo ipsam turpis egestas ipsum and purus
                  sapien ultrice an aliquam quaerat ipsum augue turpis sapien
                  cursus congue magna purus quaerat at ligula purus egestas
                  magna cursus undo varius purus quaerat sapien magnis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* photos */}
      <section className="py-10 xl:py-12">
        <div className="container py-4 mx-auto sm:py-8 max-w-7xl">
          <div className="flex flex-wrap items-start justify-center gap-4 max-auto sm:gap-0">
            <div className="max-w-full px-2 xl:w-5/12 lg:max-xl:w-[40%] md:w-5/12">
              <div className="text-end">
                <div className="sm:block hidden ml-[13%] rounded-[12px] !mb-[30px] overflow-hidden lg:max-xl:ml-[3%]">
                  <img src={a21} alt="a2-1" className="rounded-[12px]" />
                </div>
                <div className="overflow-hidden sm:rounded-[12px] sm:!ml-[-10px]">
                  <img src={a22} alt="a2-2" className="sm:rounded-[12px]" />
                </div>
              </div>
            </div>
            <div className="w-full max-w-full px-2 xl:w-7/12 lg:max-xl:w-[53%] md:max-lg:w-[50%]">
              <div className="overflow-hidden sm:mr-[-8%] !mb-[30px] md:max-lg:mr-[-8%] md:max-lg:mb-[20px]">
                <img src={a23} alt="a2-3" className="rounded-[12px]" />
              </div>
              <div className="flex flex-wrap">
                <div className="w-full max-w-full sm:px-2 md:w-7/12 lg:max-xl:w-6/12 xl:w-6/12">
                  <div className="bg-[#2e3648] flex flex-col justify-center h-full py-10 sm:px-6 px-4 md:px-8 text-base sm:text-base xl:text-lg rounded-[12px] text-white gap-4 ">
                    <p className="font-medium">
                      Nullam tempor pretium a gravida donec congue ipsum porta
                      justo integer dolor odio auctor a neque suscipit an ipsum
                      integer congue purus at pretium turpis egestas and volute
                      laoreet quaerat
                    </p>
                    <div className="flex flex-col gap-0">
                      <span className="font-bold">Charlie Cheever</span>
                      <span>CEO & CO-FOUNDER</span>
                    </div>
                  </div>
                </div>
                <div className="sm:block hidden max-w-full md:w-5/12 lg:max-xl:w-6/12 xl:w-6/12 w-full px-2 overflow-hidden rounded-[12px]">
                  <img src={a24} alt="" className="rounded-[12px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <ServicesSection services_data={services_data} />

      {/* Founder Section */}
      <section className="px-2 py-10 xl:py-12 xl:px-0 bg-[#F4F4FE] max-w-full">
        <div className="container mx-auto sm:px-0 max-w-7xl">
          <div className="grid items-center max-w-full grid-cols-1 gap-6 mx-auto xl:gap-2 xl:max-w-full sm:grid-cols-2 md:max-w-4xl">
            {/* Content */}
            <div className="order-2 sm:mt-0 sm:order-1">
              <span className="text-sm font-semibold uppercase xl:text-base text-martex-light_text">
                Co-founder at Martex
              </span>
              <h1 className="mt-6 text-3xl font-bold text-martex-dark_text md:text-5xl xl:text-6xl">
                Henry Adams
              </h1>
              <p className="mt-4 md:text-lg/8 text-lg/8 xl:text-[22px]/8  text-martex-light_text">
                "Sodales tempor sapien diam purus ipsum quaerat and volute fusce
                a congue laoreet turpis neque diam auctor turpis vitae dolor
                magna luctus placerat neque ipsum fusce cursus ligula cursus
                purus vitae purus and ipsum suscipit. Nemo ipsam cubilia donec
                turpis undo egestas ipsum a purus sapien ultrice aliquam lacus
                and quaerat an ipsum augue turpis sapien cursus congue augue"
              </p>
            </div>
            {/* Image & Video */}
            <div className="relative order-1 w-full max-w-md mt-10 sm:order-2 lg:mt-0 xl:ml-10 lg:max-w-lg xl:max-w-xl">
              <img
                src="https://martex-tailwindcss.ibthemespro.com/images/img-17.jpg"
                alt="img & video"
                className="rounded-2xl"
              />
              <div className="absolute p-4 top-[40%] left-[42%] flex items-center justify-center  text-white bg-[#1680fb] rounded-full shadow-lg cursor-pointer hover:bg-[#185abd] lg:w-24 lg:h-24">
                <span className="">
                  <Play className="w-10 h-10 ml-1 lg:w-14 lg:h-14" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Jobs Open */}
      <JobsOpen />

      {/* Hiring Poster */}
      <HiringPoster />
      <Footer logo={logoblue} />
    </section>
  );
};

export default Careers;
