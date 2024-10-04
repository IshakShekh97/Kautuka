import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center text-5xl gap-5">
      <Loader className="animate-spin size-10" />
      <p className="animate-pulse">Loading ...</p>
    </div>
  );
};

export default Loading;
