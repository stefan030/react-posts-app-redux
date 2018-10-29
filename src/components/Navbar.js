import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a href="/home" className="brand-logo">Post's</a>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;