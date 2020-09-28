import React from 'react'
import { NavLink } from 'react-router-dom';


export default () => {

    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand text-monospace " style={{fontSize: '30px'}} href="/">Claudiu Diaconeasa</a>
            <div className="about-portfolio-contact">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <NavLink to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link activeClassName" : "nav-link"}>Portfolio
                             </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/resume" className={window.location.pathname === "/resume" ? "nav-link activeClassName" : "nav-link"}>Resume
                             </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact
                             </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}