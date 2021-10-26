import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const ServiceDetails = () => {

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./../services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const details = services.find(service => service.id === parseInt(serviceId));
    console.log(details)
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <div className="pb-5">
                    <h1>We are here to help when you need us</h1>
                    <p>By helping with daily activities, our caregivers enable clients to maintain their normal daily routines. Hourly home care allows clients to use our caregivers on an hourly or as-needed basis. Surrounded by their possessions, pets, and a familiar environment, our clients receive the support they need to enjoy their regular activities and continue living well at home.</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={details?.img} className="img-fluid h-100" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="py-3">
                            <h1>{details?.name}</h1>
                            <p>Service No. {serviceId}</p>
                        </div>
                        <h5>Doctor: Dr. {details?.doctor}</h5>

                        <p>Fee: ${details?.price}</p><br />
                        <h6>Details:</h6>
                        <p>{details?.description}</p>
                        <button className="btn btn-color mt-3 py-3 px-5 text-white">Appointment Now !!!</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;