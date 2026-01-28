import React, { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import { brandData } from "../Data/brand";

const Company = ({ title }) => {
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

  return (
    <section className="py-10 sm:py-20">
      <div className="container px-3 mx-auto sm:px-6">
        {/* text */}
        <div className="py-5 text-center">
          <h1 className="text-xl font-medium text-martex-dark_text">{title}</h1>
        </div>
        {/* company carousel */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full mx-auto max-w-[1300px] xl:px-0 px-3"
          onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
          options={{ loop: false }}
        >
          <CarouselContent>
            {brandData.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-[60%] md:basis-1/2 lg:basis-[20%] pl-4"
              >
                <div className="p-1">
                  <Card className="transition-all border-none shadow-none cursor-pointer hover:-translate-y-2">
                    <CardContent className="flex items-center justify-center w-full p-3 sm:w-3/4 lg:w-full">
                      <img src={item.img} alt="brand" />
                      {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
};

export default Company;
