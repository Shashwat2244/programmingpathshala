import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img src="./Logo.jpg" alt="logo" width={140} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            <a href="#residencies " className="t">
              Home
            </a>
            <a href="#value " className="t">
              Services
            </a>
            <a href="#contact-us " className="t">
              Features
            </a>
            <a href="#get-started " className="t">
              Product
            </a>
            <a href="#get-started " className="t">
              Testimonial
            </a>
            <a href="#get-started " className="t">
              FAQ
            </a>
            <a className="login t" href="#get-started">
              Login
            </a>
            <button className="button">
              <a href="#" className="siup">
                Sign Up
              </a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
