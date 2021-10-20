import React from 'react';
import image1 from './images (1).jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import './home.css'
import { Card, CardGroup, FloatingLabel, Form, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';


const Home = () => {
    const { user } = useAuth();
    return (

        <div className="container">
            <h2 className="text-secondary mt-3">Our Doctors</h2>
            <CardGroup>
                <Card className="m-2">
                    <Card.Img variant="top" src={image1} />
                    <Card.Body>
                        <Card.Title>Dr. Karina</Card.Title>
                        <Card.Text>
                            Our Experts Fit You With Comfortable Dentures At Great Prices. Book A Visit Now! Over 5 Years Experience. Top Rated Dental Services. Family Friendly Dentist. Services: Family Dentistry, Cosmetic Dentistry, Teeth Whitening, Cavity Treatment, Wisdom Teeth Removal, Dentures, Dental Implants.
                        </Card.Text>
                        <button type="details" className="bg-info rounded"> Details</button>
                    </Card.Body>
                </Card>
                <Card className="m-2">
                    <Card.Img variant="top" src={image2} />
                    <Card.Body>
                        <Card.Title>Dr. Denniel</Card.Title>
                        <Card.Text>
                            Our Experts Fit You With Comfortable Dentures At Great Prices. Book A Visit Now! Over 5 Years Experience. Top Rated Dental Services. Family Friendly Dentist. Services: Family Dentistry, Cosmetic Dentistry, Teeth Whitening, Cavity Treatment, Wisdom Teeth Removal, Dentures, Dental Implants.
                        </Card.Text>
                        <button type="details" className="bg-info rounded"> Details</button>
                    </Card.Body>
                </Card>
                <Card className="m-2">
                    <Card.Img variant="top" src={image3} />
                    <Card.Body>
                        <Card.Title>Dr. Fedrikh</Card.Title>
                        <Card.Text>
                            Our Experts Fit You With Comfortable Dentures At Great Prices. Book A Visit Now! Over 5 Years Experience. Top Rated Dental Services. Family Friendly Dentist. Services: Family Dentistry, Cosmetic Dentistry, Teeth Whitening, Cavity Treatment, Wisdom Teeth Removal, Dentures, Dental Implants.
                        </Card.Text>
                        <button type="details" className="bg-info rounded"> Details</button>
                    </Card.Body>
                </Card>
            </CardGroup>
            <h3 className="text-secondary">Let Your Valuable Feedback</h3>
            <div className="bg-secondary">
                <Form className="p-5">
                    <Row className="mb-3">
                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Row>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form>
                <div className="pb-5">
                    <button as="input" type="submit" value="Submit" className="bg-lightyellow text-dark rounded p-2" >Send</button>
                </div>
            </div>
            <h5>User: {user.displayName}</h5>

        </div>



    );
};

export default Home;