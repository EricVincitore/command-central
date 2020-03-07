import React from "react";
import {Link} from "react-router-dom"

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
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