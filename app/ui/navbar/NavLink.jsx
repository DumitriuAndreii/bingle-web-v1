import React from "react";

export const NavLink = ({ href, title }) => {
    const linkClass = `block py-2 pl-3 pr-4 text-white sm:text-xl rounded-full hover:text-[#ADB7BE] ${
        title === 'Log In' ? 'md:p-0 border border-red-500 p-3 md:py-2 md:pl-3 md:pr-4 bg-[#DD003F]' : 'md:p-0 '
      }`;

  const handleClick = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();

      const section = document.querySelector(href);
      if (section) {
        const offsetTop = section.offsetTop;
        window.scrollTo({
          top: offsetTop - 140,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <a href={href} onClick={handleClick} className={linkClass}>
      {title}
    </a>
  );
};
