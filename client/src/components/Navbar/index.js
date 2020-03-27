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
          name : sessionStorage.getItem("user").name
        });
        document.getElementById("loginBtn").innerHTML ="Logout";
        
      };
      
  };
  
  

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
  };

  handleLogin = (event) => {
    event.preventDefault();
    // API.Login()
    // .then((response)=> {
    //   sessionStorage.setItem("user", JSON.stringify(response.data))
    // })
    window.location.href = "/signin"
  };
  
  

  render() {
    console.log(sessionStorage.getItem("user"))
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
              href={(this.state.user) ? "/": "/signin"} 
              onClick = {(this.state.user) ? this.handleLogout : this.handleLogin } 
              className="link"
              id="loginBtn" 
              style={{color:"#2b3d52"}}>
                {(window.location.pathname == "/signin") ? "" : "Login" }
              </NavLink>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  };
}



export default Top;