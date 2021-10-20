import React from 'react';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./header.css"
import images from '../Home/middle.jpg'
import useAuth from '../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    const navStyle = {
        textDecoration: "none",
        color: "darkblue",
        padding: "10px",
    }
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={images} alt="Card image" className="w-100 Card-img" />
            <Card.ImgOverlay>
                <Navbar variant="dark" >
                    <Container>
                        <Navbar.Brand to="/home" style={{
                            fontWeight: 'bolder',
                            fontSize: '40px',
                            color: 'darkblue'
                        }}>Dental Clinic
                            <br />
                            <h4>A Better Life Start's A Beautiful <span className="text-primary ">Smile</span></h4>
                            <h6 className="text-secondary">Best dentist office in Fairbanks.<br />The staff and the drs make going to the<br /> dentist a pleasant experience.<br />I would recommend everyone<br />
                                needing some work done to go to Bast Dental</h6>
                        </Navbar.Brand>
                        <Nav className="justify-content-end mb-5" >
                            <NavLink style={navStyle} activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/home">Home</NavLink>
                            <NavLink style={navStyle} activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/banner">Banner</NavLink>
                            <NavLink style={navStyle} activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/service">Service</NavLink>
                            <NavLink style={navStyle} activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/login">Log In</NavLink>
                            <NavLink style={navStyle} activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/register">Register</NavLink>
                            <span className="text-secondary pt-2 bg-info rounded">{user.displayName} </span>
                            {user?.email && <button className="bg-info rounded" onClick={logout}>log out</button>}
                        </Nav>
                    </Container>

                </Navbar>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Header;