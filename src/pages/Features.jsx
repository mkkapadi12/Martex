import React from "react";
import Navbar from "./../components/Navbar";
import logoblue from "./../assets/images/logo-blue.png";
import Productivity from "./../components/Productivity";
import f6 from "../assets/images/img-06.png";
import f2 from "../assets/images/img-02.png";
import { services_about } from "./../Data/servicesdata";
import ServicesSection from "./../components/ServicesSection";
import Solution from "../assets/images/img-03.png";
import { Layers, Workflow, Hand, Gauge, CheckIcon } from "lucide-react";
import SolutionsSection from "./../components/SolutionsSection";
import Stats from "./../components/Stats";
import SocialMarketing from "./../components/SocialMarketing";
import FAQSection from "./../components/FAQSection";
import Footer from "./../components/Footer";
import { Button } from "./../components/ui/button";

const featuresData2 = [
  {
    title: "Integrated",
    description:
      "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor",
    icon: Layers,
  },
  {
    title: "Flexible",
    description:
      "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor",
    icon: Workflow,
  },
  {
    title: "Intuitive",
    description:
      "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor",
    icon: Hand,
  },
  {
    title: "Efficient",
    description:
      "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor",
    icon: Gauge,
  },
];

const steps = [
  {
    id: 1,
    title: "Simple, Secure & Intuitive",
    desc: "Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat",
  },
  {
    id: 2,
    title: "Weekly Email Reports",
    desc: "Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat",
  },
  {
    id: 3,
    title: "No Personal Data Collected",
    desc: "Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat",
  },
];

const toolsData = [
  {
    id: 1,
    name: "Zapier",
    action: "Share findings",
    img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/tool-1.png",
  },
  {
    id: 2,
    name: "Google Analytics",
    action: "Share findings",
    img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/tool-2.png",
  },
  {
    id: 3,
    name: "Amplitude",
    action: "Share findings",
    img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/tool-3.png",
  },
  {
    id: 4,
    name: "Hubspot",
    action: "Share findings",
    img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/tool-4.png",
  },
  {
    id: 5,
    name: "MailChimp",
    action: "Import data",
    img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/tool-5.png",
  },
  {
    id: 6,
    name: "Slack",
    action: "Share findings",
    img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/tool-6.png",
  },
  {
    id: 7,
    name: "Dropbox",
    action: "Import data",
    img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/tool-7.png",
  },
  {
    id: 8,
    name: "Trello",
    action: "Share findings",
    img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/tool-8.png",
  },
  {
    id: 9,
    name: "Google Drive",
    action: "Import data",
    img: "https://martex-tailwindcss.ibthemespro.com/images/png_icons/tool-9.png",
  },
];

const Features = () => {
  const data = {
    logo: logoblue,
    logoscroll: logoblue,
    bg: "bg-white",
    link_color: "text-martex-dark_text",
    btn_color: "bg-[#1680fb]",
    btn_text: "Get Started",
    text: "text-martex-dark_text",
  };
  const services_data = {
    title: "We make your business gain more revenue at a glance",
    services: services_about,
  };

  const bulletPoints = [
    "Magna dolor luctus at egestas sapien",
    "Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue varius magnis",
    "Volute turpis dolores and sagittis congue",
  ];
  return (
    <section className="">
      <Navbar data={data} />
      <section className="pt-[132px] lg:max-xl:pt-[120px] md:max-lg:!mt-[80px] md:max-lg:pt-[70px]">
        {/*  */}
        <Productivity img={f6} />
        {/* Services */}
        <ServicesSection services_data={services_data} />
        {/* Automate */}
        <section className="py-10 mx-auto sm:px-12 xl:px-2">
          <div className="container mx-auto">
            <div className="sm:px-12 xl:px-16 sm:py-10 xl:py-14 mx-auto max-w-[1300px] bg-[#f4f4f9] rounded-[12px]">
              <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2">
                {/* content */}
                <div className="order-2 px-2 xl:px-0 sm:px-4 sm:order-1">
                  <h4 className="mb-6 text-sm font-semibold uppercase xl:text-base text-martex-light_text">
                    Enhance Engagement
                  </h4>
                  <h1 className="mb-6 text-3xl font-bold text-martex-dark_text md:text-[43px] xl:text-[55px] !leading-tight">
                    Automate your way <br /> to success
                  </h1>
                  <p className="mb-5 font-medium text-martex-light_text xl:text-lg/8 text-base/7">
                    Sodales tempor sapien quaerat congue eget ipsum laoreet
                    turpis neque auctor vitae eros dolor luctus placerat magna
                    ligula cursus and purus pretium
                  </p>
                  <h3 className="mb-5 text-xl font-semibold text-martex-dark_text sm:text-2xl xl:text-3xl">
                    The smarter way to work
                  </h3>
                  <p className="mb-5 font-medium text-martex-light_text xl:text-lg/8 text-base/7">
                    Sapien tempor sodales quaerat ipsum undo congue laoreet
                    turpis neque auctor turpis vitae dolor luctus placerat magna
                    and ligula cursus purus vitae
                  </p>
                </div>
                {/* image */}
                <div className="order-1 px-2 xl:px-0 sm:px-4 sm:order-2">
                  <img
                    src="https://martex-tailwindcss.ibthemespro.com/images/img-05.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Solution  */}
        <section className="py-10 xl:py-12">
          <div className="grid items-center grid-cols-1 gap-8 px-2 py-10 mx-auto sm:py-5 sm:px-9 xl:px-4 md:grid-cols-2 xl:max-w-7xl sm:max-w-5xl">
            {/* image */}
            <div className="px-3 sm:px-0">
              <img src={Solution} alt="solution" />
            </div>
            {/* content */}
            <div className="px-2 space-y-4 sm:space-y-5 l:space-y-6">
              <h2 className="font-semibold  sm:text-[22px] text-xl xl:text-3xl text-martex-dark_text">
                Solution that grows with you
              </h2>
              <p className="text-base text-martex-light_text xl:text-lg">
                Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
                neque auctor turpis vitae dolor luctus placerat magna and ligula
                cursus purus vitae purus an ipsum suscipit
              </p>

              <h2 className="sm:text-[22px] text-xl xl:text-3xl font-semibold text-martex-dark_text">
                Connect your data sources
              </h2>
              <p className="text-base text-martex-light_text xl:text-lg">
                Tempor sapien sodales quaerat ipsum undo congue laoreet turpis
                neque auctor turpis vitae dolor luctus placerat magna and ligula
                cursus purus an ipsum vitae suscipit purus
              </p>

              <ul className="pl-5 space-y-4 list-disc text-martex-light_text">
                <li className="text-base xl:text-lg">
                  Tempor sapien quaerat an ipsum laoreet purus and sapien dolor
                  an ultrice ipsum aliquam undo congue dolor cursus
                </li>
                <li className="text-base xl:text-lg">
                  Cursus purus suscipit vitae cubilia magnis volute egestas
                  vitae sapien turpis ultrice auctor congue magna placerat
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Smart Solution */}
        <section className="py-10 xl:py-12">
          <div className="container px-3 mx-auto sm:px-6">
            {/* Section 1 */}
            <div className="mx-auto max-w-[1300px] mb-16">
              <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-6">
                {/* content */}
                <div className="w-full space-y-5 sm:max-w-md xl:max-w-lg xl:space-y-7">
                  <span className="block text-sm font-bold tracking-widest uppercase text-martex-light_text">
                    One-stop solution
                  </span>
                  <h2 className="text-[26px] sm:text-[44px] font-bold leading-tight xl:text-[55px] text-martex-dark_text">
                    Smart solutions, <br className="hidden sm:block" />
                    real-time results
                  </h2>
                  <p className="text-base leading-relaxed xl:text-lg text-martex-light_text">
                    Sodales tempor sapien quaerat ipsum and congue undo laoreet
                    turpis neque auctor turpis vitae dolor luctus placerat magna
                    ligula and cursus vitae
                  </p>

                  <ul className="ml-5 space-y-3 text-base list-disc xl:space-y-5 xl:text-lg text-martex-light_text">
                    <li>
                      Tempor sapien quaerat undo ipsum laoreet diam purus sapien
                      a dolor ociis ultrice ipsum aliquam congue a dolor cursus
                      congue varius magnis
                    </li>
                    <li>
                      Cursus purus suscipit vitae cubilia magnis diam volute
                      egestas sapien ultrice auctor
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-8">
                  {featuresData2.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white text-center sm:text-start rounded-2xl p-5 xl:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 border border-gray-100 flex flex-col items-center sm:items-start"
                    >
                      <div className="flex items-center justify-center w-20 h-20 mb-6 text-center rounded-full bg-blue-50 text-martex-light_blue">
                        <feature.icon className="w-10 h-10 xl:w-12 xl:h-12" />
                      </div>
                      <h3 className="mb-3 font-bold text-lg xl:text-[22px] text-martex-dark_text">
                        {feature.title}
                      </h3>
                      <p className="text-base leading-relaxed xl:text-lg text-martex-light_text">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* main features */}
        <SolutionsSection title={"Everything in One Place"} />

        {/* marketing */}
        <section className="py-10 xl:py-12">
          <div className="container px-3 mx-auto sm:px-10 xl:px-6">
            <div className="max-w-[1300px] mx-auto space-y-10 sm:space-y-16 text-center bg-[#EAE8F6] rounded-xl sm:p-[70px_20px_0px] xl:p-[80px_70px_0px] p-[70px_10px_0px]">
              {/* text */}
              <div className="max-w-2xl mx-auto space-y-2 xl:max-w-4xl">
                <h2 className="!leading-tight font-bold text-center mx-auto text-3xl sm:text-[44px] xl:text-6xl text-martex-dark_text">
                  Build a customer-centric <br className="hidden sm:block" />{" "}
                  marketing strategy
                </h2>
                <p className="text-base sm:text-xl text-center text-martex-light_text xl:text-[22px] xl:px-3">
                  Aliquam a augue suscipit luctus neque purus ipsum neque diam
                  dolor primis libero tempus, blandit and cursus varius and
                  magnis sodales
                </p>
              </div>
              {/* image */}
              <div className="flex justify-center w-full sm:px-10 xl:px-0">
                <img
                  src="https://martex-tailwindcss.ibthemespro.com/images/tablet-01.png"
                  alt="table 1"
                />
              </div>
            </div>
          </div>
        </section>

        {/* states */}
        <Stats />

        {/* Easy integration */}
        <section className="py-10 xl:py-12">
          <div className="container px-3 mx-auto sm:px-6">
            <div className="mx-auto max-w-[1300px]">
              <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
                {/* image */}
                <div className="p-2 sm:px-0">
                  <img src={f2} alt="Easy Integration" />
                </div>
                {/* content */}
                <div className="order-1 space-y-5 xl:px-0 lg:order-2">
                  <h2 className="text-sm font-semibold uppercase xl:text-base text-martex-light_text">
                    Easy Integration
                  </h2>

                  <h1 className="text-[26px] sm:text-[44px] font-bold leading-tight xl:text-[53px] text-martex-dark_text">
                    Plug your essential tools in few clicks
                  </h1>

                  <ul className="ml-5 space-y-4 text-base list-disc xl:text-xl xl:space-y-6 text-martex-light_text">
                    <li>
                      Cursus purus suscipit vitae cubilia magnis volute egestas
                      vitae sapien turpis sodales magna undo aoreet primis
                    </li>
                    <li>
                      Tempor sapien quaerat an ipsum laoreet purus and sapien
                      dolor an ultrice ipsum aliquam undo congue dolor cursus
                      purus congue and ipsum purus sapien a blandit
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 xl:py-12">
          <div className="container px-3 mx-auto space-y-20 sm:px-6">
            <div className="mx-auto max-w-[1300px] xl:px-0 sm:px-6">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-6">
                {/* content */}
                <div className="flex flex-col items-start justify-center order-2 gap-4 sm:order-1 xl:gap-6">
                  {steps.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex items-start gap-4 sm:gap-6"
                      >
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="flex items-center justify-center w-10 h-10 text-xl font-bold text-white transition-colors duration-300 scale-100 border-2 rounded-full xl:h-12 xl:w-12 bg-martex-light_blue border-martex-light_blue hover:bg-white hover:text-martex-light_blue">
                            {" "}
                            <span>{item.id}</span>
                          </div>
                          <span className="w-[3px] h-[80px] xl:h-[90px] bg-[#e4e4e4]"></span>
                        </div>
                        <div className="space-y-4 xl:space-y-6">
                          <h2 className="text-xl font-semibold xl:text-2xl text-martex-dark_text">
                            {item.title}
                          </h2>
                          <p className="text-base xl:text-lg text-martex-light_text">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* image */}
                <div className="order-1 p-3 sm:order-2 sm:px-0">
                  <img
                    src="https://martex-tailwindcss.ibthemespro.com/images/tablet-01.png"
                    alt="img 10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* strategies */}
        <section className="py-10 mx-auto xl:py-12">
          <div className="container mx-auto">
            <div className="mx-auto max-w-[1350px]">
              <div className="grid items-center grid-cols-1 gap-2 xl:gap-6 sm:grid-cols-2">
                {/* content */}
                <div className="order-2 px-2 xl:px-6 sm:px-2">
                  <h4 className="mb-8 text-sm font-semibold uppercase xl:text-base text-martex-light_text">
                    Strategies That Work
                  </h4>
                  <h1 className="text-2xl font-bold leading-normal mb-7 text-martex-dark_text md:text-5xl xl:text-6xl">
                    Right strategies & implementations
                  </h1>
                  <p className="mb-5 font-medium text-martex-light_text xl:text-lg/8 text-base/8">
                    Sodales tempor sapien quaerat ipsum undo congue laoreet
                    turpis neque auctor turpis vitae dolor luctus placerat magna
                    and ligula cursus purus vitae purus an ipsum suscipit
                  </p>
                  <h3 className="mb-5 text-xl font-semibold text-martex-dark_text sm:text-2xl xl:text-3xl">
                    Get more done in less time
                  </h3>
                  <ul className="space-y-3">
                    {bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-martex-light_blue">
                          <CheckIcon size={18} />
                        </span>
                        <span className="text-base xl:text-lg text-martex-light_text">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* image */}
                <div className="order-1 px-2 xl:px-0 sm:px-4">
                  <img
                    src="https://martex-tailwindcss.ibthemespro.com/images/img-08.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 xl:py-12">
          <div className="container mx-auto">
            <div className="mx-auto max-w-[1350px] space-y-10">
              {/* title */}
              <div className="px-4 mx-auto space-y-4 text-center sm:max-w-3xl xl:max-w-4xl sm:px-0">
                <h2 className="text-3xl font-semibold sm:text-5xl xl:text-6xl !leading-snug xl:!leading-tight text-martex-dark_text">
                  All Necessary Tools
                </h2>
                <p className="text-lg sm:text-xl text-martex-light_text xl:text-2xl">
                  Ligula risus auctor tempus magna feugiat lacinia.
                </p>
              </div>
              <div className="px-3 py-5 mx-auto max-w-7xl sm:px-9 xl:px-0">
                <div className="grid grid-cols-1 gap-5 sm:gap-4 xl:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {toolsData.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className="p-5 sm:p-4 xl:p-5 border border-[#ccc] rounded-lg cursor-pointer hover:duration-500 hover:transition-all hover:border-none hover:shadow-md"
                      >
                        <div className="flex items-center justify-start gap-5">
                          <div className="w-12 xl:w-16">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="">
                            <h1 className="text-xl font-semibold xl:text-2xl text-martex-dark_text">
                              {item.name}
                            </h1>
                            <h4 className="text-base text-martex-light_text">
                              {item.action}
                            </h4>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button className="!px-8 !py-6 font-semibold rounded-[6px] hover:border-martex-dark_blue  hover:text-white transition-all duration-500 bg-transparent border-2 text-martex-dark_text border-martex-dark_text hover:bg-martex-dark_blue text-base xl:text-lg">View all integration</Button>
              </div>
            </div>
          </div>
        </section>

        {/*  */}
        <SocialMarketing
          title={"Track the progress towards objectives with key results"}
        />

        {/* Faqs */}
        <FAQSection get_color={"text-martex-light_blue"} />

        {/*  */}
        <section>
          <div className="xl:max-w-[1300px] container mx-auto sm:px-10 xl:px-2 pb-10">
            <div
              className="xl:px-2 mt-[30px] pb-12 bg-no-repeat bg-fixed bg-cover sm:rounded-xl md:pl-[60px] xl:pl-[80px] pt-[55px] sm:pt-0 sm:px-0 px-[25px]"
              style={{
                backgroundImage: `url("https://martex-tailwindcss.ibthemespro.com/images/bg-05.jpg")`,
                position: "center center",
              }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* details */}
                <div className="flex sm:text-start text-center gap-4 flex-col items-center sm:items-start justify-center md:max-lg:w-7/12 lg:max-xl:w-7/12 xl:w-7/12 w-full flex-[0_0_auto] sm:px-[calc(0.5*_1.5rem)] max-w-full">
                  <h1 className="text-3xl sm:text-[40px] xl:text-[50px] sm:pr-[10%] !leading-tight font-semibold text-white ">
                    Getting started with Martex today!
                  </h1>
                  <p className="max-w-md xl:max-w-xl text-lg xl:text-[21px] text-white">
                    Congue laoreet turpis neque auctor turpis vitae dolor a
                    luctus placerat and magna ligula cursus
                  </p>
                  <Button className="py-6 text-base font-semibold text-white transition-all duration-300 border rounded-sm text xl:text-lg px-7 bg-martex-light_blue hover:bg-transparent border-martex-light_blue hover:border-white">
                    Get started - it's free
                  </Button>
                </div>
                {/* image */}
                <div className="xl:m-[-40px_-20px_-30px_-40px] sm:block hidden -rotate-[20deg] sm:m-[-30px_-20px_-20px_-40px] m-[35px_0_-40px_0] md:w-5/12 lg:max-xl:w-5/12 xl:w-5/12 w-full flex-[0_0_auto] px-[calc(0.5*_1.5rem)] max-w-full">
                  <img
                    src={
                      "https://martex-tailwindcss.ibthemespro.com/images/img-04.png"
                    }
                    alt="cartoon"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* footer */}
      <Footer logo={logoblue} />
    </section>
  );
};

export default Features;
