"use client";
import GoBackBtn from "@/components/resuables/GoBackBtn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { productfeatures, staticImages, tags } from "@/constants";
import { cn } from "@/lib/utils";
import { IndianRupee, ShoppingBag, ShoppingCart } from "lucide-react";

import Image from "next/image";
import React, { useState } from "react";

const ProductPage = ({
  params,
}: {
  params: {
    pId: string;
  };
}) => {
  const [image, setImage] = useState<string | undefined>(
    `/images/shirt-${params.pId}.webp`
  );
  const isInStock = true;

  return (
    <div className="min-h-screen w-full">
      <GoBackBtn herf="/products/" btnText="Go Back" />
      <div className="flex gap-6  max-md:flex-col w-full max-md:h-full h-[90%] max-md:p-5">
        <Card className="w-full md:w-[70%] md:h-[50rem] h-[25rem] md:p-10 p-3 ">
          <div className="md:h-[100%] h-full w-full overflow-hidden relative rounded-md">
            <Image
              src={image as string}
              alt={params.pId}
              fill
              className="w-full object-cover"
            />
          </div>
        </Card>
        <div className="size-full py-5 px-4 md:px-10 md:py-8 ">
          <div className="flex flex-col">
            {/* Prioduct Images */}

            <div className="flex flex-wrap gap-4 items-center justify-center md:max-w-[75%] ">
              {staticImages.map((img) => (
                <Image
                  onClick={() => setImage(img.imageUrl)}
                  key={img.idx}
                  src={img.imageUrl}
                  alt={img.alt}
                  height={100}
                  width={100}
                  className={cn(
                    "w-20 h-20 object-cover rounded-md cursor-pointer",
                    image === img.imageUrl
                      ? "border-2 border-primary"
                      : "opacity-60"
                  )}
                />
              ))}
            </div>

            {/* Product Heading */}
            <h1 className="md:text-5xl pt-5 text-3xl font-bold text-pretty md:max-w-[75%]">
              Oversized Cotton T-Shirt
            </h1>
            {/* Product Description */}
            <div className="tags flex items-center pt-5 flex-wrap gap-x-1 gap-y-2 sm:gap-x-3 sm:gap-y-3 md:max-w-[75%]">
              {tags.map((tag) => (
                <Badge key={tag.idx}>{tag.name}</Badge>
              ))}
            </div>
            {/* Product Tags */}
            <p className="pt-10 text-sm text-muted-foreground text-pretty md:max-w-[75%]">
              This oversized black t-shirt is crafted from 100% high-quality
              cotton, ensuring maximum comfort and breathability. It features a
              unique and funky doodle art print that adds a touch of creativity
              and fun to your casual wardrobe. Ideal for those who appreciate
              both comfort and artistic flair in their clothing.
            </p>
            {/* Product Price */}
            <div className="pt-6 flex items-center justify-between md:max-w-[75%]">
              <div className="flex justify-center flex-col">
                <div className="flex items-center">
                  <IndianRupee className="size-7 font-bold" />
                  <span className="text-3xl font-semibold text-pretty">
                    999
                  </span>
                </div>
                <div className="text-xs flex items-center ml-2 pt-1">
                  M.R.P
                  <IndianRupee className="size-3 ml-3" />
                  <span className="line-through ml-2 text-muted-foreground">
                    1,299
                  </span>
                </div>
              </div>

              <div className="">
                {isInStock ? (
                  <Badge variant={"positive"}>In Stock</Badge>
                ) : (
                  <Badge variant={"destructive"}>Out of Stock</Badge>
                )}
              </div>
            </div>
            {/* Product Buttons */}
            <div className="flex pt-5 gap-2 md:gap-3 flex-col *:w-full">
              <Button
                disabled={!isInStock}
                className="items-center gap-2 md:max-w-[75%] "
              >
                <ShoppingCart className="size-5 pb-1" />
                Add to Cart
              </Button>
              <Button
                disabled={!isInStock}
                className="items-center gap-2 md:max-w-[75%] "
              >
                <ShoppingBag className="size-5 pb-1" />
                Buy Now!
              </Button>
            </div>
            {/* Product Cards*/}
            <div className="flex md:max-w-[75%] pt-5 overflow-hidden">
              <div className="flex  gap-2 w-[100%] py-5  max-md:overflow-x-auto ">
                {productfeatures.map((feature) => (
                  <Card key={feature.name} className="flex gap-2 w-40 p-3">
                    <feature.icon className="size-7" />
                    <span className="text-sm text-muted-foreground">
                      {feature.name}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
