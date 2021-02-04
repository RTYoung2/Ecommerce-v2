import React, { Component } from "react";
// import MenuItems from "./MenuItems"
import "./Navigation.css";
import logo from "./T7.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export class MyNav extends Component {
  render() {
    return (
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand className="logoImage" href="/">
          {" "}
          <img src={logo} width="50" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Products">PRODUCTS</Nav.Link>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default MyNav;
