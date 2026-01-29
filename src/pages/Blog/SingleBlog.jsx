import React from "react";
import {
  FacebookIcon,
  ReplyAll,
  SaveAllIcon,
  SaveIcon,
  TwitterIcon,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/logo-blue.png";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import Blogcards from "./components/Blogcards";
import Footer from "../../components/Footer";

const commentData = [
  {
    id: 1,
    name: "",
    img: "https://martex-tailwindcss.ibthemespro.com/images/comment-author-1.jpg",
    duration: "2 days ago",
    desc: "Ratione mollis undo risus aenean arcu lectus rutrum porta primis and puruss augue luctus neque purus and ipsum neque dolor primis libero tempus eget tempor ligula posuere varius impedit enim tempor vitae pulvinar at congue egestas vitae augue",
  },
  {
    id: 2,
    name: "S. Parker",
    img: "https://martex-tailwindcss.ibthemespro.com/images/comment-author-2.jpg",
    duration: "4 days ago",
    desc: "Etiam sapien magna at vitae pulvinar congue egestas and undo pretium neque viverra porta suscipit ratione, mollis risus a lectus aliquet",
  },
  {
    id: 3,
    name: "Sarah Griffi",
    img: "https://martex-tailwindcss.ibthemespro.com/images/comment-author-3.jpg",
    duration: "16 days ago",
    desc: "Porta ratione mollis risus aenean arcu lectus rutrum porta primis and puruss augue luctus neque purus and ipsum neque dolor primis libero tempus eget tempor ligula posuere varius impedit enim tempor vitae pulvinar at congue an augue egestas vitae",
  },
  {
    id: 4,
    name: "Joshua A.",
    img: "https://martex-tailwindcss.ibthemespro.com/images/comment-author-4.jpg",
    duration: "30 days ago",
    desc: "Congue augue egestas integer velna purus undo purus magna nec suscipit egestas magna and neque egestas a porta ratione mollis risus lectus porta quisque lacus",
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

const SingleBlog = () => {
  const data = {
    logo: "https://martex-tailwindcss.ibthemespro.com/images/logo-blog.png",
    logoscroll:
      "https://martex-tailwindcss.ibthemespro.com/images/logo-blog.png",
    bg: "bg-white",
    link_color: "text-martex-dark_text",
    btn_color: "bg-[#1680fb]",
    btn_text: "Get Started",
    text: "text-martex-dark_text",
  };

  return (
    <main className="single-blog">
      <section className="">
        <Navbar data={data} />
        <section className="xl:pt-[180px] lg:max-xl:pt-[160px] container mx-auto pt-[80px] mt-[80px] sm:mt-[40px]">
          <div className="px-10 text-center sm:mb-10 sm:px-0">
            <h4 className="mb-6 uppercase text-[#0fbc49]">Community</h4>
            <h2 className="text-martex-dark_text xl:text-[55px] mb-7 md:text-[45px] sm:text-3xl text-[27px] font-semibold lg:max-w-3xl xl:max-w-5xl mx-auto !leading-tight">
              Maecenas congue augue sagittis egestas integer velna purus
            </h2>
            <p className="font-semibold sm:text-xl text-martex-dark_text">
              By Melissa McClone |
              <span className="font-medium">
                <br className="block sm:hidden" /> April 29, 2023
              </span>
            </p>
          </div>
          <div className="max-w-[1080px] mx-auto xl:px-0 px-2">
            <div className="flex items-center px-1 py-5 xl:px-0 sm:px-10">
              <img
                src="https://martex-tailwindcss.ibthemespro.com/images/blog/post-12-img.jpg"
                alt="single blog"
                className="rounded-[16px] overflow-hidden"
              />
            </div>
            <div className="py-5 space-y-5 sm:py-3 xl:py-6 text-martex-light_text xl:text-lg/8 sm:text-base/7 xl:px-0 sm:px-10">
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
            <div className="py-5 space-y-5 sm:py-3 xl:py-6 text-martex-light_text xl:text-lg/8 sm:text-base/7 xl:px-0 sm:px-10">
              <h1 className="text-xl font-semibold xl:text-3xl sm:text-2xl text-martex-dark_text">
                1. Lorem egestas a dolor fusce posuere
              </h1>
              <p className="">
                Congue sagittis augue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce aliquam
              </p>
              <ul className="ml-5 space-y-5 list-disc">
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
                  Quaerat sodales sapien undo{" "}
                  <a
                    href=""
                    className="text-[#1680fb] font-semibold hover:text-martex-dark_text transition-all duration-300 underline"
                  >
                    {" "}
                    create an API Key{" "}
                  </a>
                  blandit velna vitae auctor and congue magna tempor sapien eget
                  gravida laoreet turpis urna augue, viverra a augue eget tempor
                  diam
                </li>
              </ul>
              <p className="">
                Congue augue sagittis egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce lorem nulla an
                aliquam lacinia justo molestie blandit justo diam an aliquet
                tortor sagittis lacinia molestie diam egestas
              </p>
            </div>
            <div className="py-5 space-y-5 sm:py-3 xl:py-6 text-martex-light_text xl:text-lg/8 sm:text-base/7 xl:px-0 sm:px-10">
              <h1 className="text-xl font-semibold xl:text-3xl sm:text-2xl text-martex-dark_text">
                Lorem egestas a dolor @luctus donec/porta curabitur diam
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
                ligula massa lorem.
              </p>
              <p className="bg-[#f8f9fa] p-4 text-[#383a42]">
                Tempor sapien and gravida donec ipsum{" "}
                <kbd class="text-[0.875em] !text-white bg-[#212529] rounded p-[.1875rem_.375rem]">
                  cd
                </kbd>{" "}
                consectetur vel imperdiet dui varius. Purus efficitur ipsum
                primis in cubilia laoreet augue egestas{" "}
                <kbd class="text-[0.875em] !text-white bg-[#212529] rounded p-[.1875rem_.375rem]">
                  <kbd class=" !text-[1em] !p-0 !text-white bg-[#212529] rounded">
                    ctrl
                  </kbd>{" "}
                  +{" "}
                  <kbd class=" !text-[1em] !p-0 !text-white bg-[#212529] rounded">
                    ,
                  </kbd>
                </kbd>
              </p>
              <p>
                Sagittis augue congue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque aliquam fusce blandit
              </p>
            </div>
            <div className="flex items-center px-0 my-10 xl:px-0 sm:px-10">
              <img
                src="https://martex-tailwindcss.ibthemespro.com/images/blog/post-13-img.jpg"
                alt="single blog"
                className="rounded-[16px] overflow-hidden"
              />
            </div>
            <div className="py-5 space-y-5 sm:py-3 xl:py-6 text-martex-light_text xl:text-lg/8 sm:text-base/7 xl:px-0 sm:px-10">
              <h2 className="!font-[100] sm:text-xl xl:text-3xl !leading-[1.45]">
                "Nulla tincidunt volutpat lectus purus diam ipsum primis felis a
                congue tempor gravida habitant morbi and tristique senectus
                netus malesuada famesa an augue luctus suscipit sapien neque
                undo purus neque dolor primis sodales dapibus egestas volute".
              </h2>
              <h3 className="pb-5 ml-4 text-base sm:text-lg">
                --- Daniel Wells, <i>Engineering Manager, Company Name</i>
              </h3>
              <p>
                Integer congue sagittis augue egestas velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque diam augue fusce sapien
              </p>
              <p>
                Integer congue sagittis augue egestas velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque diam augue fusce sapien nulla a
                primis lacinia ipsum a molestie blandit and justo an aliquet
                eget molestie sagittis at quaerat sodales
              </p>
            </div>
            <div className="py-5 space-y-5 sm:py-3 xl:py-6 text-martex-light_text xl:text-lg/8 sm:text-base/7 xl:px-0 sm:px-10">
              <h1 className="text-xl font-semibold xl:text-3xl sm:text-2xl text-martex-dark_text">
                2. Volutpat egestas and magna suscipit
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
                ligula massa lorem.
              </p>
              <div class="txt-code rounded-[6px] bg-[#f8f9fa] !m-[30px_0px] p-[20px_18px]">
                <p class="text-[#383a42] !text-[1rem] leading-[1.75] !mb-0">
                  <code className="code-language-js !text-[0.875em] !text-[#151515] [word-wrap:break-word]">
                    <span>
                      <span class="code-variable !text-[#986801]">module</span>.
                      <span class="code-property !text-[#151515]">exports</span>{" "}
                      {"= {"}
                      <br />
                      <span>
                        <span class="code-variable !text-[#986801]">
                          content
                        </span>
                        {": ['"}
                        <span class="code-string !text-[#50a14f]">
                          {"./src/**/*.{ts,tsx,html}"}
                        </span>
                        {"'],"}
                      </span>
                      <br />
                      <span>// ...</span>
                      <br />
                      <span>{`}`}</span>
                    </span>
                  </code>
                </p>
              </div>
              <p>
                Sagittis augue congue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque aliquam fusce blandit
              </p>

              <h1 className="xl:text-[28px] sm:text-2xl font-semibold text-martex-dark_text sm:py-4 text-xl">
                Primis and augue "ligula" efficitur (viverra bibendum aliquet
                dapibus aliquet dictum tempor diam as an example).
              </h1>
              <p>
                Sagittis congue augue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce lacinia placerat
                and nulla justo molestie blandit justo diam aliquet tortor
                molestie sagittis lacinia undo and mullam molestie diam luctus
                donec bibendum aliquet massa elementum. ibero quisque lacus and
                ligula massa lorem fusce cursus fusce nulla vitae massa placerat
                and mollis, sapien gravida aliquet ipsum ultrices aliquet lorem
                diam purus undo vitae aliquam auris dapibus libero fusce
                blandit.
              </p>
              <p class="text-[#383a42] leading-[1.75] !mb-0 p-4">
                Quisque laoreet turpis{" "}
                <kbd class="text-[0.875em] !text-white bg-[#212529] rounded p-[.1875rem_.375rem]">
                  cmd
                </kbd>
                urna augue, viverra a augue eget, dictum tempor diam in cubilia
                laoreet augue egestas{" "}
                <kbd class="text-[0.875em] !text-white bg-[#212529] rounded p-[.1875rem_.375rem]">
                  <kbd class=" !text-[1em] !p-0 !text-white bg-[#212529] rounded">
                    Alt
                  </kbd>{" "}
                  +{" "}
                  <kbd class=" !text-[1em] !p-0 !text-white bg-[#212529] rounded">
                    F1
                  </kbd>
                </kbd>{" "}
                congue and egestas volutpat egestas magna suscipit.
              </p>
              <p>
                Congue augue sagittis egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                gestas a molestie donec libero sapien dapibus congue tempor undo
                quisque fusce cursus neque blandit fusce lorem nulla an aliquam
                lacinia justo molestie blandit justo diam an aliquet tortor
                sagittis lacinia molestie diam egestas
              </p>
            </div>
            <div className="py-5 space-y-5 sm:py-3 xl:py-6 text-martex-light_text xl:text-lg/8 sm:text-base/7 xl:px-0 sm:px-10">
              <h1 className="text-xl font-semibold xl:text-3xl sm:text-2xl text-martex-dark_text">
                Vitae massa placerat undo purus?
              </h1>
              <p>
                Sagittis augue congue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque aliquam fusce blandit
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
                  sodales sapien congue augue egestas
                </li>
                <li>
                  Quaerat sodales sapien undo euismod purus blandit velna vitae
                  auctor and congue magna tempor sapien eget gravida laoreet
                  turpis urna augue, viverra a augue eget tempor diam
                </li>
              </ul>
              <div className="flex items-center justify-center px-0 py-5 xl:px-0 sm:px-10">
                <img
                  src="https://martex-tailwindcss.ibthemespro.com/images/blog/post-14-img.jpg"
                  alt="single blog"
                  className="rounded-[16px] overflow-hidden"
                />
              </div>
              <p>
                Congue augue sagittis egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce lorem nulla an
                aliquam
              </p>
              <p>
                Sagittis congue augue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce lacinia placerat
                and nulla justo molestie blandit justo diam aliquet tortor
                molestie sagittis lacinia undo and mullam molestie diam luctus
                donec bibendum aliquet massa elementum. Libero quisque lacus and
                ligula massa lorem.
              </p>
            </div>
            <div className="py-5 space-y-5 sm:py-3 xl:py-6 text-martex-light_text xl:text-lg/8 sm:text-base/7 xl:px-0 sm:px-10">
              <h1 className="text-xl font-semibold xl:text-3xl sm:text-2xl text-martex-dark_text">
                3. Egestas volute turpis dolores
              </h1>
              <p>
                Congue augue sagittis egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque blandit fusce lorem nulla an
                aliquam lacinia justo molestie blandit justo diam an aliquet
                tortor sagittis lacinia molestie diam egestass
              </p>
              <p>
                Sagittis augue congue egestas integer velna purus purus magna
                nec suscipit and egestas magna aliquam ipsum vitae purus justo
                lacus ligula ipsum primis cubilia donec undo augue luctus vitae
                egestas a molestie donec libero sapien dapibus congue tempor
                undo quisque fusce cursus neque aliquam fusce blandit
              </p>
              <div className="py-6">
                <div className="flex items-center justify-start gap-4 transition-all ">
                  <TwitterIcon
                    className="duration-300 cursor-pointer hover:text-martex-dark_text"
                    size={24}
                  />
                  <FacebookIcon
                    className="duration-300 cursor-pointer hover:text-martex-dark_text"
                    size={24}
                  />
                  <SaveIcon
                    className="duration-300 cursor-pointer hover:text-martex-dark_text"
                    size={24}
                  />
                </div>
              </div>
            </div>
            <div className="relative py-5 sm:py-[40px] lg:py-[80px] xl:py-[100px] xl:px-0 sm:px-10 border-y-2">
              <div className="flex gap-6 px-0 ">
                {/* Avtar */}
                <div className="">
                  <img
                    src="https://martex-tailwindcss.ibthemespro.com/images/post-author.jpg"
                    alt="Avtar"
                    className="w-[200px] rounded-full"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-semibold text-martex-dark_text">
                    Melissa McClone
                  </h3>
                  <p className="font-medium text-xl/7 text-martex-light_text">
                    Lorem ipsum dolor sit amet, consectetur elit eiusmod tempor
                    sapien dolore and incidide labore dolore labore incididunt
                    turpis vitae raesent a varius dolor sagittis luctus placerat
                    a magna cursus congue magna nihil mpedit.
                  </p>
                </div>
              </div>
              {/* Follow btn */}
              <div className="absolute right-5 top-12">
                <button className="!border !border-martex-light_text !bg-none px-4 py-[3px] text-martex-dark_text rounded">
                  Follow
                </button>
              </div>
            </div>
            <div className="relative py-5 sm:py-[40px] lg:py-[80px] xl:py-[100px] xl:px-0 sm:px-10 space-y-5">
              <h1 className="text-xl font-semibold sm:text-2xl xl:text-3xl text-martex-dark_text mb-14">
                4 Comments
              </h1>
              <div className="space-y-12">
                {commentData.map((item) => {
                  return (
                    <div
                      className="flex gap-6 px-0 pb-8 border-b-2"
                      key={item.id}
                    >
                      {/* Avtar */}
                      <div className="w-[9rem] h-[4rem] bg-cover flex">
                        <img
                          src={item.img}
                          alt="Avtar"
                          className="rounded-full "
                        />
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-[20px] font-semibold text-martex-dark_text">
                            {item.name}
                          </h3>
                          <h4 className="flex items-center gap-2 text-base text-martex-light_text">
                            <span>{item.duration} -</span>
                            <ReplyAll className="" size={24} /> Reply
                          </h4>
                        </div>

                        <p className="font-medium text-xl/7 text-martex-light_text">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="py-5 xl:px-0 sm:px-10">
              <div className="mb-5">
                <h1 className="mb-4 text-xl font-semibold sm:text-2xl xl:text-3xl text-martex-dark_text">
                  Leave a Comment
                </h1>
                <p className="text-lg text-martex-light_text ">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <div className="py-8 sm:px-0">
                <form action="" className="space-y-6">
                  {/* comment section */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="comment"
                      className="pl-2 text-lg font-semibold"
                    >
                      Add Comment *
                    </Label>
                    <Textarea
                      className="!min-h-[12rem] !text-xl !p-4 !bg-[#f5f6f8]"
                      placeholder="Enter your comment here*..."
                    />
                  </div>
                  {/* name */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="comment"
                      className="pl-2 text-lg font-semibold"
                    >
                      Name*
                    </Label>
                    <Input
                      type="text"
                      className=" !text-lg !py-6 !bg-[#f5f6f8]"
                      placeholder="Enter your Name*"
                    />
                  </div>
                  {/* email */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className="pl-2 text-lg font-semibold"
                    >
                      Email*
                    </Label>
                    <Input
                      type="email"
                      className=" !text-lg !py-6 !bg-[#f5f6f8]"
                      placeholder="Enter your Email*"
                    />
                  </div>
                  {/* Submit */}
                  <div className="!mt-8">
                    <Button className="px-12 py-6 text-lg bg-[#1680fb] transition-all duration-300 hover:bg-[#185abd]">
                      Post Comment
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Articles & Resources Section */}
          <section className="px-2 py-10 sm:px-0">
            <div className="container mx-auto max-w-7xl xl:px-0 sm:px-9">
              <div className="px-2 mx-auto text-center">
                <h1 className="xl:text-6xl text-martex-dark_text font-semibold mb-4 !leading-tight md:text-4xl text-3xl">
                  Keep Reading...
                </h1>
                <span className="text-xl text-martex-light_text md:text-xl xl:text-2xl sm:text-lg">
                  Ligula risus auctor tempus magna feugiat lacinia.
                </span>
              </div>
              <Blogcards blogPosts={blogPosts} />
            </div>
          </section>

          <Footer logo={logo} />
        </section>
      </section>
    </main>
  );
};

export default SingleBlog;
