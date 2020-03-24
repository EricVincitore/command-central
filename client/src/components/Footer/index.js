import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav
} from 'reactstrap';

const footer = {
    bottomMargin: "0%",
    flex: 1,
    backgroundColor: "#4e7781",
    height:"2npm%",
    bottom: 0,
    width:"100%",
    position:"fixed"
}



class Bottom extends Component {
  

  render() {
    
    return(
    
      <Navbar className ="nav-bar sticky-bottom footer" style={footer} light expand="md">
        <NavbarBrand href="/homepage" className="navBrand" style={{color:"#fff", fontSize:"50%"}}>Command Central</NavbarBrand>
        <Nav className="mr-auto" navbar>
        </Nav>
      </Navbar>
    );
  };
}


export default Bottom;
