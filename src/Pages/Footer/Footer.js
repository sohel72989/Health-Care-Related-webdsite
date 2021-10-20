import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark text-white p-5">
                <Container>
                    <Row className="fw-bolder">
                        <Col>Contact Us</Col>
                        <Col>Help Centre</Col>
                        <Col>Support</Col>
                    </Row>
                    <Row>
                        <Col>
                            Mobile: 01704283235<br />
                            phon: +002 808
                        </Col>
                        <Col>
                            rana72989@gmail.com<br />
                            Privacy Policy
                        </Col>
                        <Col>
                            Apoinment<br />
                            Event<br />
                            Gallery
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="pt-5 bg-dark text-white pb-2">
                <h6><small>@Copyright 2021 The Logo All Right Reserved</small></h6>
            </div>
        </div>
    );
};

export default Footer;