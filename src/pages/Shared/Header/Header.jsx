import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Container className='text-center'>
            <div>
                <img src={logo} alt="" />
                <p>Journalism Without Fear o    r Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex bg-light p-2 rounded'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100}>
                    <span className='fw-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</span>
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <Button variant="secondary">Secondary</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;