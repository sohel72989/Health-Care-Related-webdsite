import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2 className="text-secondary">Please Login</h2>
            <form>
                <input type="email" placeholder="email" className="m-2" />
                <br />
                <input type="password" placeholder="password" className="m-2" />
                <br />
                <input type="submit" value="Submit" className="bg-secondary text-white rounded" />
            </form>
            <button onClick={signInUsingGoogle} className="bg-info rounded m-2">Google Sign In</button>
            <br />
            {/* <button onClick={signInUsingGithub}>GitHub Sign In</button>
            <br /> */}
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;