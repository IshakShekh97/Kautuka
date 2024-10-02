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
      <Card className="md:max-w-[350px] max-w-[200px] ">
        <CardHeader>
          <CardTitle className="text-base">
            {title ? title : <p>OverSized Tee</p>}
          </CardTitle>
          <CardDescription className="truncate max-sm:text-xs">
            {description ? (
              description
            ) : (
              <span>OverSized Tee of Geen Color with awsome Doodle Art</span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative md:size-[300px] size-[150px] bg-red-400 rounded-lg overflow-hidden ">
            <Image
              src={(imageUrl as string) || "/images/shirt-1.webp"}
              alt={imageAlt || "Shirt Image"}
              fill
              className="w-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        </CardContent>
        <CardFooter className="gap-5 justify-between hidden md:flex ">
          <Button variant={"default"}>Add to Cart</Button>
          <Button variant={"outline"}>View Details</Button>
        </CardFooter>
        <CardFooter className="gap-5 justify-between md:hidden ">
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
