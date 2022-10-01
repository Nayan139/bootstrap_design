import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../asset/creative-logo-blue.svg";

const img = {
  height: "60px",
  widtth: "60px",
  marginTop: "5px",
  marginLeft: "15px",
};
const menu = {
  color: "black",
  marginLeft: "150px",
};

const submenu = {
  margin: "15px",
};
// .bg-light {
//   /* background-color: #f8f9fa!important; */
// }
const Menu = () => {
  return (
    <>
      <Container fluid>
        <Navbar expand="lg" style={menu} sticky="top">
          <Navbar.Brand>
            {" "}
            <img src={logo} alt="logo" style={img}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={submenu}>
                Home
              </Nav.Link>
              <Nav.Link href="#action2" style={submenu}>
                College Course
              </Nav.Link>
              <NavDropdown
                title="Course"
                style={submenu}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">React JS</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Node JS</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Angular JS</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Vue JS</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Next JS</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Venila JS</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action6" style={submenu}>
                Blog
              </Nav.Link>
              <Nav.Link href="#action7" style={submenu}>
                Get in touch
              </Nav.Link>
              <NavDropdown
                title="Know US"
                style={submenu}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action8">About us</NavDropdown.Item>
                <NavDropdown.Item href="#action9">
                  Success Story
                </NavDropdown.Item>
                <NavDropdown.Item href="#action10">
                  Placement Partner
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Menu;
