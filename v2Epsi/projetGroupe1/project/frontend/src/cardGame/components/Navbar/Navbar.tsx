import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { StyledNavbar } from "./styles";

interface NavProps {
  name: string;
  score: number;
}

const NavBar: React.FC<NavProps> = ({ name, score }) => (
  <StyledNavbar color="dark mb-2">
    <NavbarBrand className="titleBar">Memory Pair Game</NavbarBrand>
    <NavbarText classNa me="playerNameText">
      Player name: {name}
    </NavbarText>
    <NavbarText className="NavBarScore">Score: {score}</NavbarText>
  </StyledNavbar>
);

export default NavBar;
