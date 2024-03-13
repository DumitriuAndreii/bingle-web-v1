import React from "react";
import { Search } from "./Search";

export const Carousel = () => {
  return (
    <div className="relative h-[600px] bg-cover bg-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.2) 100%)",
        }}
      ></div>
      <div
        className="absolute inset-0 bg-[url('/carousel.png')]"
        style={{ zIndex: -1 }}
      ></div>
      {/* Content */}
      <div className="relative z-10">
        <Search />
      </div>
    </div>
  );
};
