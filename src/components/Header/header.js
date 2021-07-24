
import React from 'react';


import './header.scss';


const Header = () => (
    <header className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <a href="/" className="navbar-brand">AlloMovie</a>
        <button className="navbar-toggler">
            <span className="navbar-toggler-icon">
            </span>
        </button>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Favoris</a>
                </li>
            </ul>
        </div>
    </header>
);


export default Header;
