import { HoverBorderGradient } from "@/components/ace/hover-border-gradient";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center h-screen w-full md:pt-44 pt-32">
        {/* Left Side */}
        <div className="size-full flex flex-col md:items-start items-center pt-20 gap-6 px-3 sm:px-6 md:px-9  ">
          <span className="flex items-center justify-center gap-2 underline underline-offset-4 font-semibold">
            Kautuka Thread Of <span className="text-emerald-500">Trust</span>
            <ArrowRight className="size-4 " />
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-md:text-center text-pretty font-extrabold">
            Welcome to Kautuka Where{" "}
            <span className="bg-gradient-to-br from-emerald-500 to-lime-300 text-transparent bg-clip-text">
              Trust
            </span>{" "}
            Weaves The Future .
          </h1>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span className="w-full flex gap-2 items-center justify-center font-bold">
              Start Shopping <ArrowUpRight className="size-6" />{" "}
            </span>
          </HoverBorderGradient>
        </div>

        {/* Right Side */}
        <div className="flex  justify-center h-fit  w-full pt-20">
          <ImageCarousel />
        </div>
      </div>

      {/* Sparkle Effect */}
      {/* <div className="hidden dark:block  relative -mt-16 h-32  overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#327,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#163474] after:bg-[#08132b]">
        <Sparkles
          density={1000}
          speed={2}
          size={2.1}
          direction="top"
          opacitySpeed={2}
          color="#32A7"
          className="absolute inset-x-0 bottom-0 h-full w-full "
        />
      </div> */}
    </>
  );
};

export default Hero;
