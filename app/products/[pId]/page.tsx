import GoBackBtn from "@/components/resuables/GoBackBtn";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { tags } from "@/constants";

import Image from "next/image";
import React from "react";

const ProductPage = ({
  params,
}: {
  params: {
    pId: string;
  };
}) => {
  return (
    <div className="h-screen w-full">
      <GoBackBtn herf="/products/" btnText="Go Back" />
      <div className="flex gap-6  max-md:flex-col w-full max-md:h-full h-[90%] max-md:p-5">
        <Card className="w-full md:w-[70%] h-[80%] md:p-10 p-3 ">
          <div className="md:h-[100%] h-full w-full overflow-hidden relative rounded-md">
            <Image
              src={`/images/shirt-${params.pId}.webp`}
              alt={params.pId}
              fill
              className="w-full object-cover"
            />
          </div>
        </Card>
        <Card className="size-full py-5 px-4 md:px-10 md:py-8">
          <div className="flex flex-col">
            <h1 className="md:text-5xl text-3xl font-bold text-pretty">
              Oversized Cotton T-Shirt
            </h1>

            <div className="tags flex items-center pt-5 flex-wrap gap-x-1 gap-y-2 sm:gap-x-3 sm:gap-y-3">
              {tags.map((tag) => (
                <Badge key={tag.idx}>{tag.name}</Badge>
              ))}
            </div>

            <p className="pt-5 text-sm text-muted-foreground">
              This oversized black t-shirt is crafted from 100% high-quality
              cotton, ensuring maximum comfort and breathability. It features a
              unique and funky doodle art print that adds a touch of creativity
              and fun to your casual wardrobe. Ideal for those who appreciate
              both comfort and artistic flair in their clothing.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductPage;
