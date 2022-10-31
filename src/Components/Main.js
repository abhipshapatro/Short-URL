import React from "react";
import Shortener from "./Shortener";

export const Main = () => {
  return (
    <div className="container flex flex-col md:flex-row w-full h-full bg-lime-900">
      {/* left container */}
      <div className="container flex items-center justify-center py-4">
        <img className="h-5/6" src="/Copywriter.png" alt="Boy with a laptop" />
      </div>
      {/* right container */}
      <div className="container flex flex-col items-center md:items-start justify-center">
        <div className="container items-center justify-center">
          <h1 className="font-extrabold text-4xl sm:text-6xl text-white max-w-xl">
            <span>Fast & Secure</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-lime-400 mt-5">
              Your new URL Shortner
            </span>
          </h1>
          {/* info */}
          <p className="text-base text-lime-200 sm:mt-5 sm:text-xl mb-10">
            The fastest and most secure URL Shortener on the web.
          </p>
        </div>
        {/* Shortener */}
        <Shortener />
      </div>
    </div>
  );
};
