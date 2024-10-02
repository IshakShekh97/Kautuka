import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-6">
      <h1 className="text-5xl font-extrabold">Under Development</h1>
      <p>
        Plaese Head back to the{" "}
        <Link href="/" className="text-blue-500 underline underline-offset-4">
          Home Page
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
