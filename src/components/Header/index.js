import React, { useState } from "react";

import { Nav, Logo, Hamburger, Menu, MenuLink, LogoN } from "./Header.styles"; 

import LaPared from "../../images/lapared.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="/">
        <LogoN src={LaPared}/>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span/> 
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        
        <MenuLink href="#about" className="primero">a cerca de</MenuLink>
        <hr class="menu"/>
        <MenuLink href="#portfolio" className="segundo">portafolio</MenuLink>
        <hr class="menu"/>
        <MenuLink href="#contact" className="tercero">contactanos</MenuLink>
        </Menu>
    </Nav>
    
  );
};

export default Header;
