import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import RoadMapItems from './RoadMapItems';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
        <Container>
          <Navbar.Brand href="/">Roadmap App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/login">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5 pt-5">
        <RoadMapItems />
      </Container>
    </div>
  );
};
export default Navigationbar;
