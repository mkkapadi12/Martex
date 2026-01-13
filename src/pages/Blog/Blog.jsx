import React from "react";
import Navbar from "../../components/Navbar";
import Blogcards from "./components/blogcards";
import { ChevronRight } from "lucide-react";
import Footer from "../../components/Footer";
import logo from "../../assets/images/logo-blue.png";
import NewsLetter from "../../components/NewsLetter";
import UsePagination from "../../hook/usePagination";

const blogPosts1 = [
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
      "https://martex-tailwindcss.ibthemespro.com/images/blog/post-1-img.jpg",
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
      "https://martex-tailwindcss.ibthemespro.com/images/blog/post-3-img.jpg",
  },
];

const blogPosts2 = [
  {
    id: 4,
    category: "Tutorials",
    categoryColor: "text-pink-500",
    title:
      "Phasellus blandit justo undo aliquam vitae molestie nunc sapien augue justo aliquet",
    description:
      "Aliqum mullam ipsum vitae and blandit vitae tempor sapien and donec lipsum",
    author: "Miranda Green",
    date: "Mar 20, 2023",
    image:
      "https://martex-tailwindcss.ibthemespro.com/images/blog/post-4-img.jpg",
  },
  {
    id: 5,
    category: "Freelancer Tips",
    categoryColor: "text-purple-500",
    title: "Blandit justo phasellus undo aliquam diam molestie vitae",
    description:
      "Luctus vitae egestas augue and ipsum ultrice quisque in cursus lacus feugiat eget congue ultrice sagittis laoreet",
    author: "Martex Team",
    date: "Mar 13, 2023",
    image:
      "https://martex-tailwindcss.ibthemespro.com/images/blog/post-5-img.jpg",
  },
  {
    id: 6,
    category: "Extensions",
    categoryColor: "text-blue-500",
    title:
      "Cursus porttitor fusce neque CEO egestas cursus magna sapien and ipsum suscipit",
    description:
      "Mullam ipsum aliqum vitae and blandit vitae tempor sapien and lipsum donec",
    author: "Martex Team",
    date: "Feb 23, 2023",
    image:
      "https://martex-tailwindcss.ibthemespro.com/images/blog/post-6-img.jpg",
  },
];

const blogPosts3 = [
  {
    id: 7,
    category: "Product News",
    categoryColor: "text-red-500",
    title: "Phasellus blandit justo undo aliquam diam vitae molestie",
    description:
      "Egestas luctus vitae augue and ipsum ultrice quisque in cursus lacus feugiat congue diam ultrice laoreet sagittis",
    author: "Martex Team",
    date: "Feb 02, 2023",
    image:
      "https://martex-tailwindcss.ibthemespro.com/images/blog/post-7-img.jpg",
  },
  {
    id: 8,
    category: "Freelancer Tips",
    categoryColor: "text-purple-500",
    title:
      "Porttitor cursus fusce neque CEO egestas cursus magna sapien and suscipit ipsum",
    description:
      "Aliqum mullam ipsum vitae and blandit vitae tempor sapien and donec lipsum",
    author: "Miranda Green",
    date: "Jan 26, 2023",
    image:
      "https://martex-tailwindcss.ibthemespro.com/images/blog/post-8-img.jpg",
  },
  {
    id: 9,
    category: "Community",
    categoryColor: "text-green-500",
    title: "Aliqum mullam porta blandit: lacus and sapien gravida",
    description:
      "Luctus vitae egestas augue and ipsum ultrice quisque in cursus lacus feugiat eget congue ultrice sagittis laoreet",
    author: "Miranda Green",
    date: "Jan 12, 2023",
    image:
      "https://martex-tailwindcss.ibthemespro.com/images/blog/post-9-img.jpg",
  },
];

const Blog = () => {
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
    <main className="blog-page">
      <Navbar data={data} />
      <section className="blog-content sm:mt-0 mt-16 pt-[80px] lg:pt-[160px] pb-[30px] md:pb-[60px]">
        {/* Hero Section */}
        <div className="container mx-auto xl:max-w-[1300px] px-4">
          <div className="grid items-center justify-center grid-cols-1 gap-6 sm:grid-cols-2">
            {/* image */}
            <div className="xl:p-0 md:p-5">
              <img
                src="https://martex-tailwindcss.ibthemespro.com/images/blog/post-11-img.jpg"
                alt="blog hero section"
                className="rounded-[18px]"
              />
            </div>
            {/* content */}
            <div className="sm:px-4">
              <h3 className="mb-3 text-[12px] font-semibold text-blue-500 uppercase sm:text-sm md:mb-4 xl:mb-8">
                Social Media Marketing
              </h3>
              <h2 className="mb-1 md:text-4xl text-xl xl:text-[43px] hover:underline cursor-pointer !leading-[1.35] font-bold text-[#353f4f]">
                Congue magna tempor and ipsum Martex sapien turpis laoreet augue
              </h2>
              <p className="text-[15px] sm:text-base xl:text-lg text-[#6c757d] font-medium mb-4">
                Aliqum mullam blandit vitae and tempor sapien and donec lipsum
                gravida porta undo velna dolor libero a risus aliquet tempus
                posuere a tempor velna tempus posuere dolor
              </p>
              <h3 className="text-[15px] sm:text-base xl:text-lg font-semibold text-[#353f4f]">
                By Martex Team{" "}
                <span className="font-medium">| Apr 28, 2023</span>
              </h3>
            </div>
          </div>
        </div>
        {/* First blogs card section */}
        <div className="mx-auto xl:max-w-[1300px] container px-4 sm:px-9 xl:px-1">
          <Blogcards blogPosts={blogPosts1} />
        </div>

        {/* Latest News */}
        <section className="py-0 latets-news-section">
          <div className="mx-auto xl:max-w-[1300px] container px-4 sm:px-9 xl:px-4 my-8 sm:my-[40px] xl:my-14">
            <h1 className="flex items-center justify-start text-2xl sm:text-3xl xl:text-[40px] font-semibold text-[#353f4f]">
              Latest News <ChevronRight className="w-8 h-8" />
            </h1>
          </div>
          <div className="mx-auto xl:max-w-[1300px] container px-4 sm:px-9 xl:px-1">
            <Blogcards blogPosts={blogPosts2} />
          </div>
        </section>

        {/* video tutorial section */}
        <section className="mx-auto xl:max-w-[1300px] container px-4 sm:px-9 xl:px-4  mt-16 mb-10">
          <div className="grid items-center justify-center grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 bg-[#2e3648] rounded-[18px]">
            {/* content */}
            <div className="order-2 sm:order-1 px-4 md:pl-[50px] md:pr-[50px] xl:pr-[60px] xl:pl-[60px] py-6 text-white">
              <h3 className="mb-3 text-[12px] font-semibold text-pink-500 uppercase sm:text-sm md:mb-4 xl:mb-8">
                Video Tutorials
              </h3>
              <h2 className="!mb-5 md:text-3xl text-xl xl:text-[40px] hover:underline cursor-pointer !leading-[1.35] font-bold">
                Lipsum sodales sapien Martex aliquet blandit augue gravida
                posuere
              </h2>
              <p className="text-[15px] sm:text-base xl:text-lg font-medium mb-4">
                Aliqum mullam blandit vitae and tempor sapien and donec lipsum
                gravida porta undo velna dolor libero risus aliquet tempus
                posuere vitae tempor
              </p>
              <h3 className="text-[15px] sm:text-base xl:text-lg font-semibold">
                By Martex Team{"  "}
                <span className="font-medium"> | Apr 14, 2023</span>
              </h3>
            </div>

            {/* image */}
            <div className="order-1 sm:order-2">
              <img
                src="https://martex-tailwindcss.ibthemespro.com/images/blog/post-10-img.jpg"
                alt="blog hero section"
                className="rounded-tr-[18px] rounded-tl-[18px] sm:rounded-tl-[0px] sm:rounded-br-[18px]"
              />
            </div>
          </div>
        </section>

        {/* All Stories */}
        <section className="py-0 latets-news-section">
          <div className="mx-auto xl:max-w-[1300px] container px-4 sm:px-9 xl:px-4 my-8 sm:my-[40px] xl:my-14">
            <h1 className="flex items-center justify-start text-2xl sm:text-3xl xl:text-[40px] font-semibold text-[#353f4f]">
              All Stories <ChevronRight className="w-8 h-8" />
            </h1>
          </div>
          <div className="mx-auto xl:max-w-[1300px] container px-4 sm:px-9 xl:px-1">
            <Blogcards blogPosts={blogPosts3} />
          </div>
        </section>
      </section>

      {/* Pagination */}
      <section className="pb-[40px]">
        <UsePagination />
      </section>

      <NewsLetter />
      <Footer logo={logo} />
    </main>
  );
};

export default Blog;
