import React from "react";
import { Button } from "../Button";

export const Header = () => {
  return (
    <header className="py-2 px-2 bg-slate-500">
      <div className="flex sm:w-[80%]  m-auto">
        <div className="h-[100px] mx-10 sm:mr-16  flex justify-center items-center">
          Logo
        </div>
        <div className="flex justify-between w-full">
          <div className="flex">
            <Button className="my-auto mx-2">Home</Button>
            <Button className="my-auto mx-2">Movies</Button>
            <Button className="my-auto mx-2">Celebrities</Button>
            <Button className="my-auto mx-2">News</Button>
          </div>
          <div className="flex mr-10">
            <Button className="my-auto mx-2">My account</Button>
            <Button className="my-auto mx-2">Log In</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
