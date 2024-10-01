import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ImageCarousel() {
  const images = [
    {
      imageUrl: "/images/shirt-1.webp",
      alt: "Shirt 1",
      idx: 1,
    },
    {
      imageUrl: "/images/shirt-2.webp",
      alt: "Shirt 2",
      idx: 2,
    },
    {
      imageUrl: "/images/shirt-3.webp",
      alt: "Shirt 3",
      idx: 3,
    },
    {
      imageUrl: "/images/shirt-4.webp",
      alt: "Shirt 4",
      idx: 4,
    },
  ];

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
        {images.map((image) => (
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
