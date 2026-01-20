import React from "react";
import Navbar from "../../components/Navbar";
import logoblue from "../../assets/images/logo-blue.png";
import { ChevronRight, Eye } from "lucide-react";
import CTASection from "../../components/CTASection";
import bg from "../../assets/images/bg-05.jpg";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
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
    <main className="project-detail">
      <section className="">
        <Navbar data={data} />
        <section className="xl:pt-[160px] lg:max-xl:pt-[140px] container mx-auto pt-[80px] mt-[80px] sm:mt-[30px]">
          <div className="!max-w-[1080px] mx-auto xl:px-0 px-2 sm:px-10">
            <div className="px-1 mb-6 xl:px-0 sm:px-10">
              <h1 className="font-semibold !leading-tight text-3xl sm:text-5xl xl:text-6xl text-martex-dark_text">
                Online shopping concept for <br className="hidden sm:block" />{" "}
                mobile app templates
              </h1>
              <hr className="xl:!my-8 my-5" />
              <div className="sm:py-5">
                <div className="flex flex-col justify-start w-full gap-0 font-semibold sm:gap-4 sm:items-center sm:flex-row sm:text-lg xl:text-xl text-martex-dark_text">
                  <div className="space-y-4 lg:w-4/12">
                    <h3>
                      Category:{" "}
                      <span className="text-medium text-martex-light_text">
                        Development
                      </span>
                    </h3>
                    <h3>
                      Client:{" "}
                      <span className="text-medium text-martex-light_text">
                        elite-themes24
                      </span>
                    </h3>
                  </div>
                  <div className="space-y-4 lg:w-4/12">
                    <h3>
                      Start Date:{" "}
                      <span className="text-medium text-martex-light_text">
                        2023-02-28
                      </span>
                    </h3>
                    <h3 className="font-medium cursor-pointer text-martex-light_blue">
                      <a href="">www.website.com</a>
                    </h3>
                  </div>
                  <div className="lg:w-4/12">
                    <h3>
                      Handover:{" "}
                      <span className="text-medium text-martex-light_text">
                        2023-04-30
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center px-1 py-7 xl:px-0 sm:px-10">
              <img
                src="https://martex-tailwindcss.ibthemespro.com/images/projects/project-07.jpg"
                alt="single blog"
                className="rounded-[16px] overflow-hidden"
              />
            </div>
            <div className="py-5 space-y-5 sm:py-3 xl:py-6 text-martex-light_text xl:text-lg/8 sm:text-base/7 xl:px-0 sm:px-10">
              <p>
                Integer congue sagittis augue egestas velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque diam augue fusce sapien nulla a
                primis lacinia ipsum a molestie blandit and justo an aliquet
                eget molestie sagittis at quaerat sodales
              </p>
              <ul className="ml-5 space-y-5 list-disc">
                <li>
                  Quaerat sodales sapien undo velna purus euismod purus velna
                  blandit vitae auctor and congue magna tempor sapien gravida
                  laoreet turpis urna augue, viverra a augue eget tempor diam
                </li>
                <li>
                  Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                  sodales sapien congue and augue egestas
                </li>
              </ul>
            </div>
            <div className="py-5 space-y-5 sm:py-3 xl:py-6 text-martex-light_text xl:text-lg/8 sm:text-base/7 xl:px-0 sm:px-10">
              <h1 className="text-xl font-semibold xl:text-3xl sm:text-2xl text-martex-dark_text">
                Overview & Challenge
              </h1>
              <p>
                Congue sagittis augue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce aliquam
              </p>
              <p>
                Congue augue sagittis egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce lorem nulla an
                aliquam lacinia justo molestie blandit justo diam an aliquet
                tortor sagittis lacinia molestie diam egestas
              </p>
              <ul className="ml-5 space-y-5 list-disc">
                <li>
                  Quaerat sodales sapien undo velna purus euismod purus velna
                  blandit vitae auctor and congue magna tempor sapien gravida
                  laoreet turpis urna augue, viverra a augue eget tempor diam
                </li>
                <li>
                  Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                  sodales sapien congue and augue egestas
                </li>
              </ul>
            </div>
            <div className="px-1 py-5 sm:py-3 xl:py-6 xl:px-0 sm:px-10">
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <div className="relative overflow-hidden sm:col-span-1 group">
                  {/* image */}
                  <img
                    src="https://martex-tailwindcss.ibthemespro.com/images/projects/project-10.jpg"
                    alt="image 1"
                    className="w-full h-auto rounded-[10px] transition-all duration-500 group-hover:opacity-80"
                  />
                  {/* Eye Icon */}
                  <div className="absolute inset-0 top-0 rounded-[10px] flex items-end justify-center transition-all duration-500 group-hover:items-center group-hover:bg-[#14141440]">
                    <div className="transition-all duration-700 translate-y-8 rounded-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <Eye className="text-white" size={35} />
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden sm:col-span-1 group">
                  <img
                    src="https://martex-tailwindcss.ibthemespro.com/images/projects/project-11.jpg"
                    alt="image 2"
                    className="w-full h-auto rounded-[10px] transition-all duration-500 group-hover:opacity-80"
                  />
                  {/* Eye Icon */}
                  <div className="absolute inset-0 top-0 rounded-[10px] flex items-end justify-center transition-all duration-500 group-hover:items-center group-hover:bg-[#14141440]">
                    <div className="transition-all duration-700 translate-y-8 rounded-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <Eye className="text-white" size={35} />
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden sm:col-span-2 group">
                  <img
                    src="https://martex-tailwindcss.ibthemespro.com/images/projects/project-08.jpg"
                    alt="image 3"
                    className="w-full h-auto rounded-[10px] transition-all duration-500 group-hover:opacity-80"
                  />
                  {/* Eye Icon */}
                  <div className="absolute inset-0 top-0 rounded-[10px] flex items-end justify-center transition-all duration-500 group-hover:items-center group-hover:bg-[#14141440]">
                    <div className="transition-all duration-700 translate-y-8 rounded-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <Eye className="text-white" size={35} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5 space-y-5 sm:py-3 xl:py-6 text-martex-light_text xl:text-lg/8 sm:text-base/7 xl:px-0 sm:px-10">
              <h1 className="text-xl font-semibold xl:text-3xl sm:text-2xl text-martex-dark_text">
                Project Summary
              </h1>
              <p>
                Congue augue sagittis egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce lorem nulla an
                aliquam lacinia justo molestie blandit justo diam an aliquet
                tortor sagittis lacinia molestie diam egestas
              </p>

              <ul className="ml-5 space-y-5 list-disc">
                <li>
                  Aliqum mullam blandit tempor sapien gravida donec ipsum porta
                  justo. Laoreet turpis urna augue, viverra a augue eget, dictum
                  tempor diam pulvinar dictum tempor
                </li>
                <li>
                  Blandit velna vitae auctor and congue magna tempor sapien eget
                  gravida laoreet turpis
                </li>
                <li>
                  Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                  sodales sapien congue and augue egestas
                </li>
              </ul>
              <p>
                Sagittis augue congue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque aliquam fusce blandit
              </p>
            </div>
            <div className="flex items-center px-1 py-7 xl:px-0 sm:px-10">
              <img
                src="https://martex-tailwindcss.ibthemespro.com/images/projects/project-09.jpg"
                alt="single blog"
                className="rounded-[16px] overflow-hidden"
              />
            </div>
            <div className="py-5 space-y-5 sm:py-3 xl:py-6 text-martex-light_text xl:text-lg/8 sm:text-base/7 xl:px-0 sm:px-10">
              <h1 className="text-xl font-semibold xl:text-3xl sm:text-2xl text-martex-dark_text">
                Solution & Results
              </h1>
              <p>
                Sagittis congue augue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce lacinia placerat
                and nulla justo molestie blandit justo diam aliquet tortor
                molestie sagittis lacinia undo and mullam molestie diam luctus
                donec bibendum aliquet massa elementum. Libero quisque lacus and
                ligula massa lorem
              </p>

              <ul className="ml-5 space-y-5 list-disc">
                <li>
                  Aliqum mullam blandit tempor sapien gravida donec ipsum porta
                  justo. Laoreet turpis urna augue, viverra a augue eget, dictum
                  tempor diam pulvinar dictum tempor
                </li>
                <li>
                  Sagittis congue augue egestas volutpat egestas magna suscipit
                  egestas magna ipsum and vitae efficitur purus and ipsum primis
                  in cubilia laoreet augue egestas luctus donec.
                </li>
              </ul>
              <p>
                Sagittis augue congue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque aliquam fusce blandit
              </p>
            </div>
            <div className="px-1 py-10 xl:py-6 sm:px-10 xl:px-0">
              <Link to="/projects">
                <h1 className="flex items-end justify-end gap-2 text-2xl font-semibold underline sm:text-4xl xl:text-5xl text-martex-dark_text">
                  More Projects <ChevronRight size={37} />
                </h1>
              </Link>
            </div>
            <div className="py-10">
              <CTASection cta_data={cta_data} />
            </div>
          </div>
          <Footer logo={logoblue} />
        </section>
      </section>
    </main>
  );
};

export default ProjectDetails;
