"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavLink } from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuOveray } from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "Movies",
    path: "#about",
  },
  {
    title: "Celebrities",
    path: "#projects",
  },
  {
    title: "Account",
    path: "#experience",
  },
  {
    title: "Log In",
    path: "#login",
  },
];



export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="top-0 left-0 right-0 z-20 bg-[#020D18] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link
          href={"/"}
          className="flex"
        >
           <Image
            src="/bingle-logo.webp" 
            alt="Logo" 
            width={70} 
            height={70} 
            className="ml-10 rounded-full"
            priority
          />
          <h1 className="items-center justify-center flex ml-3 text-3xl">Bingle</h1>
        </Link>
        <div className="mobile-menu block md:hidden py-6">
          {!navbarOpen ? (
            <button onClick={()=>{setNavbarOpen(true)}} className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={()=>{setNavbarOpen(false)}} className="flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-10 md:p-5 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index} className="items-center flex">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOveray links={navLinks}/> : null}
    </nav>
  );
};
