import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2 className="text-secondary">Please Register</h2>
            <form>
                <input type="Name" placeholder="name" className="m-2" />
                <br />
                <input type="email" placeholder="email" className="m-2" />
                <br />
                <input type="password" placeholder="password" className="m-2" />
                <br />
                <input type="submit" value="Register" className="bg-secondary text-white rounded" />
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;