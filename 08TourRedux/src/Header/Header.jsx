import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { setCount } from "../feature/Handel/Apihandle"; 

function Header() {
  // const [badgeCount, setBadgeCount] = useState(0);
  const count = useSelector((state) => state.count);
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary pb-xxl-5 fixed-top"
      style={{}}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://t3.ftcdn.net/jpg/03/62/18/74/360_F_362187413_FHqRSkVNIpowU6Jm3ebPZ7ElFhdLfdkk.jpg"
            style={{ height: "100px", padding: "" }}
          ></img>
          <span style={{ fontFamily: "serif", fontSize: "35px" }}>
            Travel Tourist
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={{ pathname: "/" }}>
              <Nav.Link
                href="#action1"
                style={{ fontFamily: "serif", fontSize: "20px" }}
              >
                Home
              </Nav.Link>
            </Link>
            <Link to={{ pathname: "/aboutus/" }}>
              <Nav.Link
                href="#action2"
                style={{ fontFamily: "serif", fontSize: "20px" }}
              >
                AboutUs
              </Nav.Link>
            </Link>
          </Nav>
          <Link to={{ pathname: "/addtocart/" }}>
            <span
              style={{ fontFamily: "serif", fontSize: "25px", marginRight: 35 }}
            >
              Cart
              
              <ShoppingCartCheckoutIcon />
              <Badge bg="primary">{count}</Badge>
            </span>
          </Link>
          <Link to={{ pathname: "/login/" }}>
            <span style={{ fontFamily: "serif", fontSize: "25px" }}>
              LogIn <PersonIcon />
            </span>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
