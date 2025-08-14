import React from "react";
import { Link } from "react-scroll";

const NavbarLinks = () => {
  const links = [
    { link: "top" },
    { link: "about" },
    { link: "menu" },
    { link: "access" },
    { link: "infomation" },
  ];
  return (
    <ul className="flex gap-6 text-center ">
      {links.map((item) => {
        return (
          <li key={item.link}>
            <Link
              to={item.link}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="cursor-pointer hover:text-zinc-500 transition-all duration-500"
            >
              {item.link}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
