import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-lime-400 py-4 px-7">
        <div className="container mx-auto text-md md:flex md:text-xl text-white font-bold text-center">
          {/* copyright text */}
          <div className="w-full justify-center items-center">
            <span className="text-sm">© 2022 All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
