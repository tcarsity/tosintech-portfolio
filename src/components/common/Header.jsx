import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed-top">
      <Navbar expand="lg">
        <div className="container">
          <Navbar.Brand href="/">TosinTech</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutme">About</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>
              {/* <Nav.Link href="#skill">Service</Nav.Link> */}

              <Nav.Link href="#contact">Contact</Nav.Link>
              {/* <Link to="" className="btn btn-primary  rounded-pill ms-2">
                Hire Me
              </Link> */}
            </Nav>

            <Link to="/projects" className="btn btn-primary rounded-pill bot">
              View Projects
            </Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
