import React from "react";
import Navbar from "../../components/Navbar";
import logoblue from "../../assets/images/logo-blue.png";
import a21 from "../../assets/images/about/a2-1.jpg";
import a22 from "../../assets/images/about/a2-2.jpg";
import a23 from "../../assets/images/about/a2-3.jpg";
import a24 from "../../assets/images/about/a2-4.jpg";
import Services from "./components/Services";
import Company from "../../components/Company";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "../../components/Footer";
import logo from "../../assets/images/logo-blue.png";
import { Play } from "lucide-react";
import Blogcards from "../Blog/components/blogcards";
import NewsLetter from "../../components/NewsLetter";

const statsData = [
  {
    id: 1,
    value: "26.62k",
    title: "Happy Customers",
    desc: "Porta justo integer and velna vitae auctor and magna quaerat ligula",
  },
  {
    id: 2,
    value: "13.54k",
    title: "Positive Ratings",
    desc: "Porta justo integer and velna vitae auctor and magna quaerat ligula",
  },
  {
    id: 3,
    value: "4.87/5",
    title: "Rating",
    desc: "Porta justo integer and velna vitae auctor and magna quaerat ligula",
  },
];

const blogPosts = [
  {
    id: 1,
    category: "Product News",
    categoryColor: "text-pink-500",
    title: "Aliqum mullam porta blandit: tempor sapien and gravida",
    description:
      "Egestas luctus vitae augue and ipsum ultrice quisque in cursus lacus feugiat congue diam ultrice laoreet sagittis",
    author: "Helen J.",
    date: "Apr 28, 2023",
    image:
      "https://martex-tailwindcss.ibthemespro.com/images/blog/post-8-img.jpg",
  },
  {
    id: 2,
    category: "Community",
    categoryColor: "text-green-500",
    title:
      "Porttitor cursus fusce egestas CEO cursus at magna sapien suscipit and egestas ipsum",
    description:
      "Aliqum mullam ipsum vitae and blandit vitae tempor sapien and donec lipsum",
    author: "Martex Team",
    date: "Apr 14, 2023",
    image:
      "https://martex-tailwindcss.ibthemespro.com/images/blog/post-2-img.jpg",
  },
  {
    id: 3,
    category: "Freelancer Tips",
    categoryColor: "text-purple-500",
    title: "Cubilia laoreet augue egestas and Martex magna impedit",
    description:
      "Luctus vitae egestas augue and ipsum ultrice quisque in cursus lacus feugiat eget congue ultrice sagittis laoreet",
    author: "Miranda Green",
    date: "Mar 27, 2023",
    image:
      "https://martex-tailwindcss.ibthemespro.com/images/blog/post-5-img.jpg",
  },
];

const About = () => {
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
    <section className="px-2">
      <Navbar data={data} />

      {/* About Hero Section */}
      <section className="mx-auto mt-24 max-w-7xl pt-14 sm:pt-20">
        <div className="container max-w-4xl px-2 mx-auto xl:mx-0">
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl xl:text-6xl text-martex-dark_text">
            We provide solutions <br className="block sm:hidden" /> for your{" "}
            <br className="hidden sm:block" />
            creative ideas
          </h1>
          <p className="py-6 leading-6 md:max-w-2xl xl:max-w-full sm:py-10 text-martex-light_text md:text-base xl:text-xl">
            An enim nullam tempor sapien gravida donec pretium ipsum porta justo
            integer and purus velna vitae auctor integer undo congue diam purus
            pretium and ligula tempor primis libero at tempus, blandit and
            cursus varius magnis at sapien egestas purus vitae purus an ipsum
          </p>
        </div>

        <div className="container py-4 sm:py-8 max-auto max-w-7xl">
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

      {/* Mission & Results */}
      <section className="px-2 py-10 mx-auto sm:px-10 xl:px-0 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
          <div className="md:text-base xl:text-xl text-martex-light_text">
            <h3 className="mb-6 text-xl font-semibold md:text-2xl xl:text-3xl text-martex-dark_text">
              Mission and impact
            </h3>
            <p className="mb-4">
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus vitae purus an ipsum suscipit
            </p>
            <ul className="pl-5 space-y-8 list-disc">
              <li>
                Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
                ultrice ipsum aliquam undo congue dolor cursus
              </li>
              <li>
                Cursus purus suscipit vitae cubilia magnis volute egestas vitae
                sapien turpis ultrice auctor congue magna placerat
              </li>
            </ul>
          </div>
          <div className="md:text-base xl:text-xl text-martex-light_text">
            <h3 className="mb-6 text-xl font-semibold md:text-2xl xl:text-3xl text-martex-dark_text">
              We deliver results
            </h3>
            <p className="mb-4">
              Nemo ipsam egestas volute turpis egestas ipsum and purus sapien
              ultrice an aliquam quaerat ipsum augue turpis sapien cursus congue
              magna purus quaerat at ligula purus egestas magna cursus undo
              varius purus magnis sapien quaerat
            </p>
            <p>
              Egestas volute nemo ipsam turpis egestas ipsum and purus sapien
              ultrice an aliquam quaerat ipsum augue turpis sapien cursus congue
              magna purus quaerat at ligula purus egestas magna cursus undo
              varius purus quaerat sapien magnis
            </p>
          </div>
        </div>
      </section>

      {/* State Section */}
      <section className="px-4 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 text-center xl:gap-12 md:grid-cols-3 sm:text-start">
            {statsData.map((item) => (
              <div key={item.id} className="px-2">
                <h3 className="text-4xl font-bold xl:text-6xl text-martex-dark_text">
                  {item.value}
                </h3>
                <div className="w-full h-px my-4 bg-gray-300" />

                <h4 className="text-xl font-semibold xl:text-2xl text-martex-dark_text">
                  {item.title}
                </h4>

                <p className="mt-3 text-base text-martex-light_text xl:text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="px-2 py-10 xl:px-0 bg-[#F4F4FE] max-w-full">
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

      {/* Section 5 */}
      <div className="px-0 py-10 mx-auto mt-10 max-w-7xl sm:px-0">
        <div className="px-2 mx-auto text-center">
          <h1 className="xl:text-6xl text-martex-dark_text font-semibold mb-4 !leading-tight md:text-4xl text-3xl">
            We make your business gain more <br className="hidden sm:block" />{" "}
            revenue at a glance
          </h1>
          <span className="text-xl text-martex-light_text md:text-xl xl:text-2xl sm:text-lg">
            Ligula risus auctor tempus magna feugiat lacinia.
          </span>
        </div>
        <Services />
      </div>

      <Company title={"Trusted and used by over 3,400 companies"} />

      <TeamSection />

      {/* Why choose us */}
      <section className="py-10 mx-auto sm:px-12 xl:px-2">
        <div className="container mx-auto">
          <div className="sm:px-12 py-14 mx-auto max-w-[1300px] bg-[#f4f4f9] rounded-[12px]">
            <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2">
              {/* content */}
              <div className="order-2 px-2 xl:px-0 sm:px-4 sm:order-1">
                <h4 className="mb-6 text-sm font-semibold uppercase xl:text-base text-martex-light_text">
                  Why Choose Us
                </h4>
                <h1 className="mb-6 text-2xl font-bold leading-normal text-martex-dark_text md:text-4xl xl:text-6xl">
                  With knowledge, <br /> skills & hard work
                </h1>
                <p className="mb-5 font-medium text-martex-light_text xl:text-lg/8 text-base/8">
                  Sodales tempor sapien quaerat congue eget ipsum laoreet turpis
                  neque auctor vitae eros dolor luctus placerat magna ligula
                  cursus and purus pretium
                </p>
                <h3 className="mb-5 text-xl font-semibold text-martex-dark_text sm:text-2xl xl:text-3xl">
                  Your road to success!
                </h3>
                <p className="mb-5 font-medium text-martex-light_text xl:text-lg/8 text-base/8">
                  Sapien tempor sodales quaerat ipsum undo congue laoreet turpis
                  neque auctor turpis vitae dolor luctus placerat magna and
                  ligula cursus purus vitae
                </p>
              </div>
              {/* image */}
              <div className="order-1 px-2 xl:px-0 sm:px-4 sm:order-2">
                <img
                  src="https://martex-tailwindcss.ibthemespro.com/images/img-08.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* strategies */}
      <section className="py-10 mx-auto sm:px-12 xl:px-2">
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
                  Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
                  neque auctor turpis vitae dolor luctus placerat magna and
                  ligula cursus purus vitae purus an ipsum suscipit
                </p>

                <p className="mb-5 font-medium text-martex-light_text xl:text-lg/8 text-base/8">
                  Nemo ipsam egestas volute turpis egestas ipsum and purus
                  sapien ultrice an aliquam quaerat ipsum augue turpis sapien
                  cursus congue magna purus quaerat at ligula purus egestas
                  magna cursus undo varius purus magnis sapien quaerat
                </p>
              </div>
              {/* image */}
              <div className="order-1 px-2 xl:px-0 sm:px-4">
                <img
                  src="https://martex-tailwindcss.ibthemespro.com/images/img-07.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection
        title={"Here’s what our amazing clients are saying"}
      />

      {/* digital marketing */}
      <section className="bg-[#f4f4f9] sm:py-20 !max-w-full w-full py-16">
        <div className="container px-2 mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2 xl:px-0 sm:px-12">
            {/* Content */}
            <div className="order-2 px-2 xl:px-0 sm:order-1">
              <h4 className="mb-8 text-sm font-semibold uppercase xl:text-base text-martex-light_text">
                One-Stop Solution
              </h4>
              <h1 className="text-2xl font-bold leading-normal mb-7 text-martex-dark_text md:text-5xl xl:text-6xl">
                Data-driven digital marketing
              </h1>
              <ul className="ml-4 space-y-5 font-medium list-disc sm:max-w-sm xl:max-w-lg text-martex-light_text xl:text-lg/8 text-base/8">
                <li>
                  Tempor sapien quaerat undo ipsum laoreet purus and sapien
                  dolor ociis ultrice ipsum aliquam undo congue dolor cursus
                  congue varius magnis
                </li>
                <li>
                  Cursus purus suscipit vitae cubilia magnis diam volute egestas
                  sapien ultrice auctor
                </li>
              </ul>
            </div>
            {/* images */}
            <div className="w-full px-2 md:px-0 oreder-1 sm:order-2">
              <img
                src="https://martex-tailwindcss.ibthemespro.com/images/img-14.png"
                alt="digital marketing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles & Resources Section */}
      <section className="px-2 py-10 sm:px-0">
        <div className="container mx-auto max-w-7xl">
          <div className="px-2 mx-auto text-center">
            <h1 className="xl:text-6xl text-martex-dark_text font-semibold mb-4 !leading-tight md:text-4xl text-3xl">
              Articles & Resources
            </h1>
            <span className="text-xl text-martex-light_text md:text-xl xl:text-2xl sm:text-lg">
              Ligula risus auctor tempus magna feugiat lacinia.
            </span>
          </div>
          <Blogcards blogPosts={blogPosts} />
        </div>
      </section>

      {/* News Letter Section */}
      <NewsLetter />
      <Footer logo={logo} />
    </section>
  );
};

export default About;
