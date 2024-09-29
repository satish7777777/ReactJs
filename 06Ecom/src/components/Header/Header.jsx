import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HomeIcon from '@mui/icons-material/Home';
function Header() {
  return (
    <div className="w-100 sticky-top"> <Navbar expand="lg" className="globalBGColour
    w-100">
    <Container fluid>
      <Navbar.Brand href="#"><LocalMallIcon />Online-Market</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
         <Link to={"/"}> <Nav.Link href="#action1"><HomeIcon />Home</Nav.Link></Link>
          {/* <Nav.Link href="#action2">Categories</Nav.Link> */}
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sale</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          {/* <Nav.Link href="#" disabled>
            Link
          </Nav.Link> */}
          {/* <NavLink to="/About">About Us</NavLink>
          <NavLink to="/Contact">Contact Us</NavLink> */}
          {/* <Link to={"/signin"}>Sign In</Link> */}
          <Nav.Link href="AddToCart">About Us</Nav.Link> 
          <Nav.Link href="ProductPage">Contact Us</Nav.Link>
        </Nav>
        {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Product Search "
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
       <Link to={"/signin"}> <AccountCircleIcon /></Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Header