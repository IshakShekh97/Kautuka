import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProductCard = () => {
  return (
    <>
      <Card className="max-w-[350px]">
        <CardHeader>
          <CardTitle>OverSized Tee</CardTitle>
          <CardDescription className="truncate">
            OverSized Tee of Geen Color with awsome Doodle Art
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative h-[300px] w-[300px] bg-red-400 rounded-lg overflow-hidden ">
            <Image
              src={"/images/shirt-1.webp"}
              alt="shirt-1"
              fill
              className="w-full object-cover hover:scale-105 transition-transform"
              // width={300}
              // height={300}
            />
          </div>
        </CardContent>
        <CardFooter className="gap-5 justify-between">
          <Button variant={"default"}>Add to Cart</Button>
          <Button variant={"outline"}>View Details</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
