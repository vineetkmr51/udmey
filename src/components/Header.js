import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
  function Header() {
    return (
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      // <header>
      //   <img src="src/assets/images/react-core-concepts.png" alt="Stylized atom" />
      //   <h1>React Essentials</h1>
      //   <p>
      //     Fundamental React concepts you will need for almost any app you are going to build!
      //   </p>
      // </header>
    );
  }
  export default Header;