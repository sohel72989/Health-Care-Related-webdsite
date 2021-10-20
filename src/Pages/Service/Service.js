import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import image from './dental-care.jpg'
import image1 from './primaryCare.jpg'
import image2 from './emergency.jpg'
import image3 from './donat-modified.png'
import image4 from './payBill.jpg'
// import Button from '@restart/ui/esm/Button';
const Service = () => {
    return (
        <Container>
            <div className="container d-flex m-5">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="ps-5">
                    <h4>Why Choose<span className="text-secondary"> Our Qualified Dentist?</span></h4>
                    <p>
                        Our Experts Fit You With Comfortable Dentures At Great Prices. Book A Visit Now! Over 5 Years Experience. Top Rated Dental Services. Family Friendly Dentist. Services: Family Dentistry, Cosmetic Dentistry, Teeth Whitening, Cavity Treatment, Wisdom Teeth Removal, Dentures, Dental Implants.
                    </p>
                    <li>Teeth Whitening</li>
                    <li>Modern Anesthetic</li>
                    <li>Quality Brackets</li>
                    <li>Root Canal</li>
                </div>
            </div >
            <div>
                <h3 className="text-secondary m-4">Add With Us</h3>
                <Row className="text-secondary">
                    <Col>
                        <img src={image1} alt="" fluid />
                        <h4>Primary Care</h4>
                    </Col>
                    <Col>
                        <img src={image2} alt="" fluid />
                        <h4>Emargency</h4>
                    </Col>
                    <Col>
                        <img src={image3} alt="" roundedCircle fluid />
                        <h4>Donate</h4>
                    </Col>
                    <Col>
                        <img src={image4} alt="" fluid />
                        <h4>Pay Bill</h4>
                    </Col>
                </Row>
            </div>
            <div>
                <h3 className="text-info mt-5">More Information</h3>
                <>
                    <InputGroup className="ms-5 mb-5 w-75">
                        <FormControl
                            placeholder=" username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <button className="rounded m-2 bg-info" type="submit" value="">Send</button>
                    </InputGroup>
                </>
            </div>
        </Container>
    );
};

export default Service;