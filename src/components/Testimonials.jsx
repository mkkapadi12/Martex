import React from "react";
import brand21 from "../assets/images/brand-21.png";
import brand22 from "../assets/images/brand-22.png";
import brand23 from "../assets/images/brand-23.png";
import StarRating from "../Helper/StarRating";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { testimonialsData } from "../Data/testimonialsData";

const Testimonials = () => {
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
    <section className="container px-4 py-12 mx-auto">
      <div className="pb-10 sm:pb-16">
        <div className="max-w-4xl py-10 mx-auto ">
          <h1 className="text-3xl font-bold text-center sm:text-4xl lg:text-6xl text-martex-dark_text">
            Here’s what our amazing clients are saying
          </h1>
          <p className="pt-10 text-lg text-center text-gray-600 sm:text-2xl">
            Ligula risus auctor tempus magna feugiat lacinia.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl mx-auto mb-10"
        >
          <CarouselContent>
            {testimonialsData.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 sm:p-2 ">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="pt-6">
                        <p className="mb-4 text-lg text-gray-600 text-start">
                          {item.desc}
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                          <div className="w-12 h-12 rounded-full">
                            <img
                              src={item.img}
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-[#343a40]">
                              {item.name}
                            </h3>
                            <h3 className="text-sm text-gray-500">
                              {item.role}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />
        </Carousel>
      </div>
      <div className="mx-auto text-xl text-center max-w-7xl text-martex-light_text">
        <h1>Our clients love us as much as we love them</h1>
        <div className="flex flex-wrap items-start justify-center gap-10 mt-2">
          {brands.map((brand, index) => (
            <div key={index} className="py-5 md:p-10">
              {/* Company img */}
              <div className="w-40 h-auto mx-auto mb-4">
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
};

export default Testimonials;
