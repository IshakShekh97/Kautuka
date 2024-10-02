import { HoverBorderGradient } from "@/components/ace/hover-border-gradient";
import { SparklesCore } from "@/components/ace/sparkles";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center h-screen w-full md:pt-44 pt-44  relative">
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
        <div className="flex  justify-center h-fit  w-full sm:pt-10 md:pt-20">
          <ImageCarousel />
        </div>

        {/* Sparkle Effect */}
        <div className="w-full h-40 bottom-0 rotate-180  absolute -z-10">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full hidden dark:block"
            particleColor="#34d339"
          />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={2}
            particleDensity={1200}
            className="w-full h-full dark:hidden"
            particleColor="#065f46"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 text-emerald-400   dark:bg-black bg-zinc-200 [mask-image:radial-gradient(600px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
