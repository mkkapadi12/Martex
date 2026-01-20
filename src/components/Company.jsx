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
    <section className="container py-10 mx-auto md:py-20">
      <div className="py-5 text-xl sm:text-2xl text-center font-semibold text-martex-dark_text">
        <h1>{title}</h1>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full mx-auto max-w-7xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        options={{ loop: true }}
      >
        <CarouselContent>
          {brandData.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-[20%]">
              <div className="p-1">
                <Card className="transition-all border-none shadow-none cursor-pointer hover:-translate-y-2">
                  <CardContent className="flex items-center justify-center w-1/2 p-3 md:w-3/4 lg:w-full">
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
    </section>
  );
};

export default Company;
