import React, { useState, Component, Fragment } from 'react';
import API from "../../utils/API"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


class Top extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
  };

  handleLogout = (event) => {
    
  }

  render() {
    const userLinks = (
      <Fragment>
        <NavItem>
            <NavLink href="/homepage">Homepage</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/metagame">Metagame</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cardDatabase">Card Database</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Resources">Resources</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Logout</NavLink>
          </NavItem>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <NavItem>
          <NavLink href="/homepage">Homepage</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/metagame">Metagame</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/cardDatabase">Card Database</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Resources">Resources</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
      </Fragment>
    )
    return(
    
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/homepage">Command Central</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { API.user = null ? guestLinks : userLinks}
          </Nav>
        </Collapse>
      </Navbar>
    );
  };
}


export default Top;