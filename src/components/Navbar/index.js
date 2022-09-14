import React from "react";
import { Container, Hamburguer, Header, Nav, NavbarContent } from "./styles";
import { GiHamburgerMenu, GiFactory } from "react-icons/gi";
import { AiFillHome, AiOutlineSetting } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { RiLogoutBoxLine } from "react-icons/ri";
import { ICON_SM } from "../../utils/sizes";
import { Typography } from "@mui/material";
import Avatar from "../Avatar";
import { logout } from "../../services/auth";
import { Link } from "react-router-dom";

function Navbar() {
  function handleLogout() {
    logout();
  }

  return (
    <Container>
      <Header>
        <Typography role="welcomeMessage" variant="h6" color="white">
          Hi Pedro...
        </Typography>
        <Avatar />
      </Header>
      <NavbarContent>
        <Hamburguer>
          <GiHamburgerMenu size={ICON_SM} color="white" />
        </Hamburguer>
        <Nav role="navigation">
          <Link to="/dashboard">
            <AiFillHome size={ICON_SM} color="white" />
          </Link>
          <div>
            <Link to="/cashflow">
              <AiOutlineSetting size={ICON_SM} color="white" />
            </Link>
          </div>
          <div>
            <VscGraph size={ICON_SM} color="white" />
          </div>
          <div>
            <RiLogoutBoxLine
              size={ICON_SM}
              color="white"
              role="logoutBtn"
              onClick={handleLogout}
            />
          </div>
        </Nav>
      </NavbarContent>
    </Container>
  );
}

export default Navbar;
