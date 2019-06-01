import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper red">
                <a href="/" className="brand-logo">Hello</a>
                <ul className="right">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);