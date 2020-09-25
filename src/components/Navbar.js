import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom';


export default () => {

    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand text-monospace " style={{fontSize: '30px'}} href="index.html">Claudiu Diaconeasa</a>
            <div className="about-portfolio-contact">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <a className="nav-link active" href="index.html">About</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link active" href="portfolio.html">Portfolio</a>
                    </li>
                    
                    
                    <li className="nav-item">
                        
                        {/* <Router>
                        <Link
                            to="/portfolio"
                            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            About
                        </Link>
                        </Router> */}
                    </li>
                    
                    
                    
                    
                    
                    <li className="nav-item">
                        <a className="nav-link" href="resume.html">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}