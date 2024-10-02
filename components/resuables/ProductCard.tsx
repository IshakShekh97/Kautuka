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
import { ExternalLink, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const ProductCard = ({
  description,
  imageAlt,
  imageUrl,
  title,
}: ProductCardProps) => {
  return (
    <>
      <Card className="sm:max-w-[350px] max-w-[150px]">
        <CardHeader className="max-sm:hidden">
          <CardTitle className="text-base">
            {title ? title : <p>OverSized Tee</p>}
          </CardTitle>
          <CardDescription className="truncate max-sm:hidden">
            {description ? (
              description
            ) : (
              <span>OverSized Tee of Geen Color with awsome Doodle Art</span>
            )}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="relative sm:size-[300px] w-[100px] h-[100px] mt-5  bg-secondary rounded-lg overflow-hidden ">
            <Image
              src={(imageUrl as string) || "/images/shirt-1.webp"}
              alt={imageAlt || "Shirt Image"}
              fill
              className="w-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        </CardContent>

        <div className="sm:hidden flex px-2 pb-3 flex-col overflow-hidden">
          <h1 className="text-sm">
            {title ? title : <span>OverSized Tee</span>}
          </h1>
          <p className="text-xs truncate">
            {description ? (
              description
            ) : (
              <span>OverSized Tee of Geen Color with awsome Doodle Art</span>
            )}
          </p>
        </div>

        <CardFooter className="gap-5 justify-between hidden sm:flex ">
          <Button variant={"default"}>Add to Cart</Button>
          <Button variant={"outline"}>View Details</Button>
        </CardFooter>
        <CardFooter className="gap-5 justify-between flex  sm:hidden ">
          <Button variant={"default"} size={"sm"}>
            <ShoppingCart className="size-4" />
          </Button>
          <Button variant={"outline"} size={"sm"}>
            <ExternalLink className="size-4" />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductCard;
