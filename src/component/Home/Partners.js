import React from 'react';
import partner1 from './../../img/partner/a1.jpg';
import partner2 from './../../img/partner/a2.jpg';
import partner3 from './../../img/partner/a3.jpg';
import partner4 from './../../img/partner/a4.jpg';

const Partners = () => {
    return (
        <div className="text-center py-5">
            <h1 className="pb-5">Affiliate partners</h1>
            <img src={partner1} className="img-fluid" alt="" />
            <img src={partner2} className="img-fluid" alt="" />
            <img src={partner3} className="img-fluid" alt="" />
            <img src={partner4} className="img-fluid" alt="" />
        </div>
    );
};

export default Partners;