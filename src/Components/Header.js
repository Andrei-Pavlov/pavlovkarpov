import React, { Component } from 'react'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo1 from './logo.png';
import { Container, Nav, Navbar, NavbarBrand} from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
        <>
        <Navbar sticky='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
            <Container>
                <NavbarBrand href='/'>
                    <img src={logo1} height={30} width={30} className='d-inline-block align-top' alt='Logo1'/>
                    React Site
                </NavbarBrand>
                <NavbarToggle aria-controls='responsive-navbar-nav'></NavbarToggle>
                <NavbarCollapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='#about'>About</Nav.Link>
                        <Nav.Link href='#services'>Services</Nav.Link>
                        <Nav.Link href='#team'>Team</Nav.Link>
                        <Nav.Link href='#achievements'>Achievements</Nav.Link>
                        <Nav.Link href='#banner'>Banner</Nav.Link>
                        <Nav.Link href='#contact'>Contact</Nav.Link>
                        <Nav.Link href='#testimonials'>Testimonials</Nav.Link>
                        
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
      </>
    );
  }
}