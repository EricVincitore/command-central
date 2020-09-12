import React, { Component } from 'react';
import API from "../../utils/API";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';


class Top extends Component {
  state = {
    isOpen: false,
    user: false,
    name: ""
  };

  componentDidMount(){
    console.log(window.location.pathname)
    console.log(sessionStorage.getItem("user"))
      if (sessionStorage.getItem("user") !== null) {
        this.setState({
          user: !this.state.user,
          name : sessionStorage.getItem("user")
        });
        document.getElementById("loginBtn").innerHTML ="Logout";
        
      };
  }
  

  toggle = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
  };

  handleLogout = (event) => {
    event.preventDefault();
    console.log("logout on click")
      API.logout()
      .then(() => {
        //console.log(sessionStorage.getItem("user"))
        sessionStorage.removeItem("user")
        this.setState({
          user: false
        });
        document.getElementById("loginBtn").innerHTML ="Login";
      })
  }

  handleLogin = (event) => {
    event.preventDefault();
    window.location.href = "/signin"
  };
  
  

  render() {
    console.log(sessionStorage.getItem("user"))
    return(
    
      <Navbar className ="nav-bar fixed-top navbarCSS" light expand="md">
        <NavbarBrand href="/" className="navBrand navbarText" >Command Central</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/" className="link navbarText" >Homepage</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/metagame" className="link navbarText" >Metagame</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cardDatabase" className="link navbarText" >Card Database</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Resources" className="link navbarText" >Resources</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  
              href={(this.state.user) ? "/": "/signin"} 
              onClick = {(this.state.user) ? this.handleLogout : this.handleLogin } 
              className="link navbarText"
              id="loginBtn" 
              >
                {(window.location.pathname === "/signin") ? "" : "Login" }
              </NavLink>
          </NavItem>
          </Nav>
          <NavbarText className="navbarText">
            {sessionStorage.getItem("user") !== null ? "Hello " + this.state.name : ""}
          </NavbarText>
        </Collapse>
      </Navbar>
    );
  }; 
};



export default Top;