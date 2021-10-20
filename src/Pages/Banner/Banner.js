import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import image1 from './download1.jpg'
import image2 from './download2.jpg'
import image3 from './download3.jpg'
import image4 from './prfrmance3.jpg'
import image5 from './prfrmance4.jpg'
import image6 from './prfrmance5.jpg'
import image7 from './prfrmance7.jpg'
import image8 from './prfrmance8.jpg'
import image9 from './prfrmance9.jpg'
import image10 from './prfrmance10.jpg'

const Banner = () => {
    return (
        <div className="container">
            <h3 className="text-secondary m-3">Our Treatment</h3>
            <Carousel className="bg-secondary">
                <Carousel.Item>
                    <img
                        className=" w-75"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark">Teeth Whitening</h3>
                        <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-75"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-white">Sergery Of Old Teeth</h3>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-75"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark">Quality Root Canal</h3>
                        <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div>
                <h3 className="text-secondary mt-5">See Our Gallery </h3>
                <Container className="bg-secondary mt-5">
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row>
                        <Col xs={12} md={8}>
                            <img src={image4} alt="" />
                        </Col>
                        <Col xs={6} md={4}>
                            <img src={image5} alt="" />
                        </Col>
                    </Row>

                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <Row>
                        <Col xs={6} md={4}>
                            <img src={image6} alt="" />
                        </Col>
                        <Col xs={6} md={4}>
                            <img src={image7} alt="" />
                        </Col>
                        <Col xs={6} md={4}>
                            <img src={image8} alt="" />
                        </Col>
                    </Row>

                    {/* Columns are always 50% wide, on mobile and desktop */}
                    <Row>
                        <Col xs={6}>
                            <img src={image9} alt="" />
                        </Col>
                        <Col xs={6}>
                            <img src={image10} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default Banner;