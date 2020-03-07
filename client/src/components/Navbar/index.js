import React from "react";
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div class="navbar-fixed">
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Command Central</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link className="nav-link" to="/homepage">Homepage</Link></li>
                    <li><Link className="nav-link" to="/metagame">Metagame</Link></li>
                    <li><Link className="nav-link" to="/cardDatabase">Card Database</Link></li>
                    <li><Link className="nav-link" to="/resources">Resources</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;