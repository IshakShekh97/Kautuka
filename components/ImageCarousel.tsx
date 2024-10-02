import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { staticImages } from "@/constants";

export function ImageCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        duration: 500,
      }}
      className="w-full max-w-72 sm:max-w-xs lg:max-w-sm  max-md:pb-36 "
    >
      <CarouselContent>
        {staticImages.map((image) => (
          <CarouselItem key={image.idx}>
            <div className="p-3">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <Image
                    src={image.imageUrl}
                    alt={image.alt}
                    width={2000}
                    height={2000}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
