import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function MyNavbar() {
  return (
    <div className="MyNavbar">
 <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Kristi_the_coder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
    </div>
  );
}

export default MyNavbar;