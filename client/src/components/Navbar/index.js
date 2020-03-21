import React, { useState, Component } from 'react';
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

  render() {
    return(
    
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/homepage">Command Central</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
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
          </Nav>
        </Collapse>
      </Navbar>
    );
  };
}


export default Top;