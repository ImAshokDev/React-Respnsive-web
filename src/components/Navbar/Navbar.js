import React from "react";
import { Nav, NavbarContainer, NavLogo, NavIcon } from "./NavbarStyle";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            TECH
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
