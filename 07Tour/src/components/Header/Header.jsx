import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from "react-router-dom";
 
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary pb-xxl-5 fixed-top" style={{}}>
      <Container fluid>
        <Navbar.Brand href="#"><img src='https://t3.ftcdn.net/jpg/03/62/18/74/360_F_362187413_FHqRSkVNIpowU6Jm3ebPZ7ElFhdLfdkk.jpg' style={{height:'100px', padding:''}}></img>
        <span style={{fontFamily:'serif', fontSize:'35px'}}>Travel Tourist</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={{pathname:"/"}}>
            <Nav.Link href="#action1" style={{fontFamily:'serif', fontSize:'20px'}}>Home</Nav.Link></Link>
            <Link to={{pathname:"/aboutus/"}}>
            <Nav.Link href="#action2" style={{fontFamily:'serif', fontSize:'20px'}}>AboutUs</Nav.Link></Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
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
          </Nav>
          <Link
              to={{pathname: "/addcart/"}}>
          <span style={{fontFamily:'serif', fontSize:'25px', marginRight:35}}>Cart <ShoppingCartCheckoutIcon/></span>
          </Link>
          <Link to={{pathname:"/login/"}}>
          <span style={{fontFamily:'serif', fontSize:'25px'}}>LogIn <PersonIcon/></span></Link>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header