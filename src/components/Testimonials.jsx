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
    <section className="py-10 xl:py-12 bg-slate-50">
      <div className="container px-3 mx-auto sm:px-6">
        {/* testimonials */}
        <div className="mx-auto max-w-[1300px]">
          {/* title */}
          <div className="max-w-3xl py-10 mx-auto xl:max-w-4xl">
            <h1 className="text-[28px] font-bold text-center sm:text-5xl xl:text-[55px] !leading-tight text-martex-dark_text">
              Here’s what our amazing clients are saying
            </h1>
            <p className="pt-6 text-xl text-center xl:pt-10 xl:text-2xl text-martex-light_text">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </div>
          {/* clients */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full mx-auto mb-10 max-w-[1300px] xl:px-0 sm:px-6"
          >
            <CarouselContent>
              {testimonialsData.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 sm:p-2">
                    <Card className="rounded-[8px]">
                      <CardContent className="flex items-center justify-center xl:p-6">
                        <div className="pt-6">
                          <p className="mb-4 text-base xl:text-lg text-martex-light_text text-start">
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
                              <h3 className="text-lg font-semibold text-martex-dark_text">
                                {item.name}
                              </h3>
                              <h3 className="text-sm text-martex-light_text">
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
          </Carousel>
        </div>
        {/* ratings */}
        <div className="mx-auto text-xl text-center max-w-[1300px] text-martex-light_text pt-20">
          <div className="px-12 text-lg xl:text-xl xl:px-0">
            <h1>Our clients love us as much as we love them</h1>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-4 mt-2 xl:gap-10">
            {brands.map((brand, index) => (
              <div key={index} className="p-5 xl::p-10">
                {/* Company img */}
                <div className="h-auto mx-auto mb-4 w-36 xl:w-40">
                  <img src={brand.img} alt={`brand ${index + 1}`} />
                </div>
                {/* Ratings */}

                <StarRating rating={brand.rate} max={5} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
