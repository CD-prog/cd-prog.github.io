import React from 'react'
import { Link } from 'react-router-dom';


export default () => {

    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand text-monospace " style={{fontSize: '30px'}} href="/">Claudiu Diaconeasa</a>
            <div className="about-portfolio-contact">
                <ul className="navbar-nav">

                    <li className="nav-item ">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>About
                             </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio
                             </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/resume" className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}>Resume
                             </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact
                             </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}