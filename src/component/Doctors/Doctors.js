import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <div className="text-center pb-4">
                    <h1>Doctors Available</h1>
                    <p>The reputation of the Hospital is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Thus, the Hospitals strives to meet patients’ standards through quality healthcare and making a difference in their lives.</p>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Doctors;