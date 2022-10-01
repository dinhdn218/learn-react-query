import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarLib from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import menu from "../../constants/menu";

const Navbar = () => {
  return (
    <>
      <NavbarLib bg="dark" expand="lg" variant="dark">
        <Container>
          <NavbarLib.Brand>Learn React Query</NavbarLib.Brand>
          <NavbarLib.Toggle aria-controls="basic-navbar-nav" />
          <NavbarLib.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {menu.map((item, index) => (
                <NavLink end className="nav-link" key={index} to={item.path}>
                  {item.text}
                </NavLink>
              ))}
            </Nav>
          </NavbarLib.Collapse>
        </Container>
      </NavbarLib>
    </>
  );
};

export default Navbar;
