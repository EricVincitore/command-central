import React, { Component } from 'react';
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

  componentDidMount(){
    API.User()
    .then((response)=>{
      sessionStorage.setItem("user", JSON.stringify(response.data))
    })
  }
  
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
      window.location.href = "/"
    })
  }

  handleLogin = (event) => {
    event.preventDefault();
    API.Login()
    .then((response)=> {
      sessionStorage.setItem("user", JSON.stringify(response.data))
    })
  }
  
  

  render() {
    return(
    
      <Navbar className ="nav-bar" style={navSettings} light expand="md">
        <NavbarBrand href="/" className="navBrand" style={{color:"#2b3d52"}}>Command Central</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/" className="link" style={{color:"#2b3d52"}}>Homepage</NavLink>
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
            <NavLink  
              href={sessionStorage.getItem("user")===null || sessionStorage.getItem("user").length === 0 || sessionStorage.getItem("user").length === undefined ? "/signin" : "/"} 
              onClick = {sessionStorage.getItem("user")===null || sessionStorage.getItem("user").length === 0 || sessionStorage.getItem("user").length === undefined ? this.handleLogin : this.handleLogout} 
              className="link" 
              style={{color:"#2b3d52"}}>
                {sessionStorage.getItem("user")===null || sessionStorage.getItem("user").length === 0 || sessionStorage.getItem("user").length === undefined ? "Login" : "Logout"}
              </NavLink>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  };

  
  
}



export default Top;