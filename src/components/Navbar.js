import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

function Navbar({ title, mode, toggleMode }) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')}
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${mode === "light" ? "dark" : "light"} `}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{
                            mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"
                        }</label>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here"
}