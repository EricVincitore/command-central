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
import PropTypes from 'prop-types';
import firebase from "firebase"

const navSettings = {
  position: "fixed",
  Top: "0",
  right: "0",
  left: "0",
  width: "100%",
  backgroundColor: "#fff",
  zIndex: 1

}

class Top extends Component {
  state = {
    isOpen: false
  };
  
  firebaseSignOut = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
  };

  handleLogout = (event) => {
    event.preventDefault();
    API.logout()
    .then(() => {
      sessionStorage.setItem("user", null)
      window.location.href = "/login"
    })
  }
  
  

  render() {

    Navbar.propTypes = {
      fixed: PropTypes.string
    };
    const userLinks = (
      <Fragment>
        <NavItem>
            <NavLink href="/homepage" className="link" style={{color:"#2b3d52"}}>Homepage</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/metagame" className="link" style={{color:"#2b3d52"}}>Metagame</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cardDatabase" className="link" style={{color:"#2b3d52"}}>Card Database</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Resources" className="link" style={{color:"#2b3d52"}}>Resources</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="/login" onClick = {sessionStorage.getItem("user") == null ? (this.handleLogout) : (this.firebaseSignOut)} className="link" style={{color:"#2b3d52"}}>Logout</NavLink>
          </NavItem>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <NavItem>
          <NavLink href="/homepage" className="link" style={{color:"#2b3d52"}}>Homepage</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/metagame" className="link" style={{color:"#2b3d52"}}>Metagame</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/cardDatabase" className="link" style={{color:"#2b3d52"}}>Card Database</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Resources" className="link" style={{color:"#2b3d52"}}>Resources</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login" className="link" style={{color:"#2b3d52"}}>Login</NavLink>
        </NavItem>
      </Fragment>
    )
    return(
      
    
      <Navbar className ="nav-bar" style={navSettings} light expand="md">
        <NavbarBrand href="/homepage" className="navBrand" style={{color:"#2b3d52"}}>Command Central</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { sessionStorage.getItem("user") == null ? (guestLinks) : (userLinks)}
          </Nav>
        </Collapse>
      </Navbar>
    );
  };

  
  
}



export default Top;