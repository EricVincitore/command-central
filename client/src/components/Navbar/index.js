import React, { Component, Fragment } from 'react';
import API from "../../utils/API";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


const navText = {
  color: "#fff" 
}

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
    API.logout()
    .then(() => {
      window.location.href = "/login"
    })
  }

  render() {
    const userLinks = (
      <Fragment>
        <NavItem>
            <NavLink href="/homepage" style={navText}>Homepage</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/metagame" style={navText}>Metagame</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cardDatabase" style={navText}>Card Database</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Resources" style={navText}>Resources</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick = {this.handleLogout} style={navText}>Logout</NavLink>
          </NavItem>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <NavItem>
          <NavLink href="/homepage" style={navText}>Homepage</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/metagame" style={navText}>Metagame</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/cardDatabase" style={navText}>Card Database</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Resources" style={navText}>Resources</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login" style={navText}>Login</NavLink>
        </NavItem>
      </Fragment>
    )
    return(
    
      <Navbar className ="nav-bar" style={{backgroundColor: "#4e7781"}} light expand="md">
        <NavbarBrand href="/homepage" className="navBrand" style={{color: "#c0dcdd"}}>Command Central</NavbarBrand>
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