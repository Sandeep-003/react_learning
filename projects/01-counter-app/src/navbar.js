import React from 'react';
import './navbar.css';

function Navbar({ title }) {
    const items = ['Home', 'About', 'Contact'];
    return (
        <nav className="navbar">
            <h1 className="navbar-title">{title}</h1>
            <ul className="navbar-items">
                {items.map((item, index) => (
                    <li key={index} className="navbar-item">{item}</li>
                ))}
            </ul>
        </nav>
    );

}

export default Navbar;