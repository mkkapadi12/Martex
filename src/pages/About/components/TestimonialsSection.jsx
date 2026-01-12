import React from "react";
import StarRating from "../../../Helper/StarRating";
import brand21 from "../../../assets/images/brand-21.png";
import brand22 from "../../../assets/images/brand-22.png";
import brand23 from "../../../assets/images/brand-23.png";

const testimonials = [
    {
      id: 1,
      text:
        "Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia laoreet augue and luctus magna dolor luctus egestas sapien vitae",
      name: "Scott Boxer",
      role: "@scott_boxer",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      text:
        "At sagittis congue augue and magna ipsum vitae a purus ipsum primis diam a cubilia laoreet augue egestas luctus a donec vitae ultrice ligula magna suscipit lectus gestas augue into cubilia",
      name: "Joel Peterson",
      role: "Internet Surfer",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 3,
      text:
        "An augue cubilia laoreet magna suscipit egestas and ipsum a lectus purus ipsum primis and augue ultrice ligula and egestas a suscipit lectus gestas undo auctor tempus feugiat impedit quaerat",
      name: "Jennifer Harper",
      role: "App Developer",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      text:
        "Augue at vitae purus tempus egestas volutpat augue undo cubilia laoreet magna suscipit luctus dolor blandit at purus tempus feugiat impedit",
      name: "Evelyn Martinez",
      role: "WordPress Consultant",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];
  
  export default function TestimonialsSection() {
    const brands = [
        {
          img: brand21,
          rate: 4.7,
        },
        {
          img: brand22,
          rate: 4.95,
        },
        { img: brand23, rate: 4.24 },
      ];
    return (
      <section className="py-20 sm:px-4 bg-none">
        <div className="mx-auto max-w-7xl">
            {/* Text Title */}
        <div className="mb-10">
            <h1 className="font-semibold sm:leading-relaxed text-center text-3xl md:text-5xl xl:text-6xl text-[#353f4f]">
            Here’s what our amazing clients <br className="hidden sm:block"/> are saying
            </h1>
            <p className="font-medium text-[#6c757d] text-center text-xl md:text-xl xl:text-2xl mt-4">Ligula risus auctor tempus magna feugiat lacinia.</p>
          </div>
          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white relative rounded-2xl px-[20px] md:py-[40px] md:px-[35px] py-[30px] shadow-md hover:shadow-lg transition ${
                  index % 2 !== 0 ? "md:translate-y-10" : ""
                }`}
              >
                {/* Quote Icon */}
                <div className="absolute md:top-[25px] top-[20px] left-[20px] md:left-[30px] mb-4 leading-none text-gray-200 text-7xl ">
                  “
                </div>
  
                {/* Text */}
                <p className="mb-6 leading-relaxed text-[#6c757d] xl:text-xl">
                  {item.text}
                </p>
  
                {/* User */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-cover w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-[#353f4f] text-xl">
                      {item.name}
                    </h4>
                    <p className="text-base text-[#6c757d]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
        </div>
        <div className="mx-auto text-xl text-center max-w-7xl text-[#6c757d] pt-20 font-medium">
        <h1 className="">Our clients love us as much <br className="block sm:hidden"/> as we love them</h1>
        <div className="flex flex-wrap items-start justify-center gap-5 mt-5 sm:gap-10">
          {brands.map((brand, index) => (
            <div key={index} className="pb-5 md:p-10">
              {/* Company img */}
              <div className="h-auto mx-auto mb-4 w-36 sm:w-40">
                <img src={brand.img} alt={`brand ${index + 1}`} />
              </div>
              {/* Ratings */}

              <StarRating rating={brand.rate} max={5} />
            </div>
          ))}
        </div>
      </div>
      </section>
    );
  }
  