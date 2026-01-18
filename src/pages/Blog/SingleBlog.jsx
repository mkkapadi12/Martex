import Navbar from "../../components/Navbar";
import React from "react";

const SingleBlog = () => {
  const data = {
    logo: "https://martex-tailwindcss.ibthemespro.com/images/logo-blog.png",
    logoscroll:
      "https://martex-tailwindcss.ibthemespro.com/images/logo-blog.png",
    bg: "bg-white",
    link_color: "text-[#353f4f]",
    btn_color: "bg-[#1680fb]",
    btn_text: "Get Started",
    text: "text-[#353f4f]",
  };

  return (
    <main className="single-blog">
      <section className="">
        <Navbar data={data} />
        <section className="xl:pt-[180px] lg:max-xl:pt-[160px] container mx-auto">
          <div className="text-center mb-14">
            <h4 className="mb-6 uppercase text-[#0fbc49]">Community</h4>
            <h2 className="text-[#353f4f] xl:text-[55px] mb-7 md:text-[45px] sm:text-3xl text-2xl font-semibold lg:max-w-3xl xl:max-w-5xl mx-auto !leading-tight">
              Maecenas congue augue sagittis egestas integer velna purus
            </h2>
            <p className="text-xl text-[#353f4f] font-semibold">
              By Melissa McClone |
              <span className="font-medium text-[]"> April 29, 2023</span>
            </p>
          </div>
          <div className="max-w-[1080px] mx-auto xl:px-0">
            <div className="flex items-center px-0 xl:px-0 sm:px-10">
              <img
                src="https://martex-tailwindcss.ibthemespro.com/images/blog/post-12-img.jpg"
                alt="single blog"
                className="rounded-[16px] overflow-hidden"
              />
            </div>
            <div className="py-12 text-[#6c757d] space-y-5 xl:text-lg/8 sm:text-base/7 xl:px-0 sm:px-10 px-2">
              <p>
                Sagittis congue augue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce lacinia placerat
                and nulla justo molestie blandit justo diam aliquet tortor
                molestie sagittis lacinia undo and mullam molestie diam luctus
                donec bibendum aliquet massa elementum. Libero quisque lacus and
                ligula massa lorem fusce cursus fusce nulla vitae massa placerat
                and mollis, sapien gravida aliquet ipsum ultrices aliquet lorem
                diam purus undo vitae aliquam auris dapibus libero fusce
                blandit.
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
            </div>
            <div className="">
              <h1 className="text-3xl font-semibold text-[#353f4f] mb-5">
                1. Lorem egestas a dolor fusce posuere
              </h1>
              <p>
                Congue sagittis augue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce aliquam
              </p>
              <ul className="ml-5 space-y-5 list-disc text-lg text-[#6c757d]">
                <li>
                  Sagittis congue augue egestas volutpat egestas magna suscipit
                  egestas magna ipsum and vitae efficitur purus and ipsum primis
                  in cubilia laoreet augue egestas luctus donec
                </li>
                <li>
                  Aliqum mullam blandit tempor sapien gravida donec ipsum porta
                  justo. Laoreet turpis urna augue, viverra a augue eget, dictum
                  tempor diam pulvinar dictum tempors
                </li>
                <li>
                  Blandit velna vitae auctor and congue magna tempor sapien eget
                  gravida laoreet turpis
                </li>
                <li>
                  Quaerat sodales sapien undo create an API Key blandit velna
                  vitae auctor and congue magna tempor sapien eget gravida
                  laoreet turpis urna augue, viverra a augue eget tempor diam
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default SingleBlog;
