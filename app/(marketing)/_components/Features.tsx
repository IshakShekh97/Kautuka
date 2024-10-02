import { TextGenerateEffect } from "@/components/ace/text-generate-effect";

const Features = () => {
  return (
    <div className="w-full mb-32 mt-10 relative">
      <div className="flex flex-col items-center justify-center">
        <TextGenerateEffect
          className="sm:text-5xl text-4xl text-center underline underline-offset-4"
          words="Why Choose Us?"
        />

        {/* Cards */}
      </div>
    </div>
  );
};

export default Features;
