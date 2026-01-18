import React from "react";
import Navbar from "../../components/Navbar";
import logoblue from "../../assets/images/logo-blue.png";
import UsePagination from "../../hook/usePagination";
import TestimonialsSection from "../About/components/TestimonialsSection";
import CTASection from "../../components/CTASection";
import bg from "../../assets/images/bg-05.jpg";
import Footer from "../../components/Footer";
import { Eye } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Mockup Poster",
    imageUrl:
      "https://martex-tailwindcss.ibthemespro.com/images/projects/project-01.jpg",
  },
  {
    id: 2,
    title: "Glued Poster",
    imageUrl:
      "https://martex-tailwindcss.ibthemespro.com/images/projects/project-02.jpg",
  },
  {
    id: 3,
    title: "Double Color",
    imageUrl:
      "https://martex-tailwindcss.ibthemespro.com/images/projects/project-03.jpg",
  },
  {
    id: 4,
    title: "Reativity",
    imageUrl:
      "https://martex-tailwindcss.ibthemespro.com/images/projects/project-04.jpg",
  },
  {
    id: 5,
    title: "Vintage Poster",
    imageUrl:
      "https://martex-tailwindcss.ibthemespro.com/images/projects/project-05.jpg",
  },
  {
    id: 6,
    title: "Paper Portrait",
    imageUrl:
      "https://martex-tailwindcss.ibthemespro.com/images/projects/project-06.jpg",
  },
];
const Project = () => {
  const data = {
    logo: logoblue,
    logoscroll: logoblue,
    bg: "bg-white",
    link_color: "text-[#353f4f]",
    btn_color: "bg-[#1680fb]",
    btn_text: "Get Started",
    text: "text-[#353f4f]",
  };

  const cta_data = {
    btn_color: "bg-[#1680fb]",
    btn_text: "Get started – it's free",
    title: "Give it a try, it's free!",
    bg: bg,
  };

  return (
    <main>
      <section className="">
        <Navbar data={data} />
        {/* Header Title Section */}
        <section className="container pt-[160px] sm:pt-[150px] xl:pt-[180px] mx-auto ">
          <div className="text-center">
            <h1 className="text-[#353f4f] md:text-5xl sm:px-0 px-12 text-3xl xl:text-6xl font-semibold">
              Great Design That Works!
            </h1>
            <p className="text-[#6c757d] mt-6 text-lg md:text-xl xl:text-2xl px-10 sm:px-4">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </div>
        </section>
        {/* Projects Section */}
        <section className="container py-12 mx-auto sm:py-16 sm:px-9 xl:max-w-[1350px]">
          <div className="grid grid-cols-1 gap-8 px-3 sm:px-2 sm:gap-6 xl:gap-7 sm:grid-cols-2 xl:px-0">
            {projectsData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative space-y-4 overflow-hidden group"
                >
                  <h1 className="md:text-2xl text-xl xl:text-3xl text-[#353f4f] font-semibold">
                    {item.title}
                  </h1>

                  {/* Image */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-auto rounded-[16px] transition-all duration-500 group-hover:opacity-80"
                  />

                  {/* Eye Icon */}
                  <div className="absolute inset-0 top-8 rounded-[16px] flex items-end justify-center transition-all duration-500 group-hover:items-center group-hover:bg-[#14141440]">
                    <div className="transition-all duration-700 translate-y-8 rounded-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <Eye className="text-white" size={35}/>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* Pagination */}
        <section className="py-[40px]">
          <UsePagination />
        </section>
        {/* Testimonials */}
        <section className="py-12">
          <TestimonialsSection title={"Our Happy Customers"} />
        </section>
        {/* CTA Section */}
        <CTASection cta_data={cta_data} />
        {/* Footer */}
        <Footer logo={logoblue} />
      </section>
    </main>
  );
};

export default Project;
