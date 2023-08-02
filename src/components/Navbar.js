import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const menuList = [
  { text: "About", href: "/about" },
  // { text: "Work", href: "/work" },
  // { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="header">
        <Link href={"/"} className="nav__logo">
          <Logo height="35" width="70"/>
        </Link>

        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>

        <nav class="nav">
            <ul class="menu">
              {menuList.map((menu, idx) => (
              <li
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </li>
            ))}
            </ul>
        </nav>
    </header>
  );
};

export default Navbar;
