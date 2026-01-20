import React from "react";

const Blogcards = ({ blogPosts }) => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => {
          return (
            <div className="px-0 py-4 xl:px-2">
              {/* blog image */}
              <div className="rounded-[12px]">
                <img
                  src={post.image}
                  alt={post.category}
                  className="rounded-[12px]"
                />
              </div>
              <div className="mt-5">
                <span
                  className={`uppercase ${post.categoryColor} text-[12px] font-medium xl:text-sm mt-2`}
                >
                  {post.category}
                </span>
                <h3 className="mt-2 text-lg sm:text-xl xl:text-[22px] font-semibold text-martex-dark_text">
                  {post.title}
                </h3>
                <p className="mt-2 text-base sm:text-base/7 xl:text-lg/8 text-martex-light_text">
                  {post.description}
                </p>
                <p className="mt-4 text-base xl:text-lg  text-martex-dark_text">
                  <span className="font-semibold">By {post.author}</span> |{" "}
                  {post.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogcards;
