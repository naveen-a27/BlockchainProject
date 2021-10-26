import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../nav.css";
class Navhead extends Component {
  state = {};
  render() {
    return (
      <Navbar className="bar" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand mb={0} href="/">
          <img src={'https://images.static-collegedunia.com/public/college_data/images/logos/16178789821.png'} width={60}/>
          &nbsp; &nbsp; Dayananda Sagar University
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item className="mt-2 mr-2 ">
              <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item className="mt-2 mr-3">
              <Link to="/view">View Certificate</Link>
            </Nav.Item>
            <Nav.Item className="mt-2 ml-2 mr-3">
              <Link to="/verify">Verify</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navhead;
