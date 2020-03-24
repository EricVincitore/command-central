import React, { Component } from 'react';
import {
  Navbar,
  Nav
} from 'reactstrap';

const footer = {
    bottomMargin: "0%",
    flex: 1,
    backgroundColor: "#4e7781",
    height:"2%",
    bottom: 0,
    width:"100%",
    position:"absolute"
}



class Bottom extends Component {
  

  render() {
    
    return(
    
      <Navbar className ="nav-bar sticky-bottom footer" style={footer} light expand="md">
        <Nav className="mr-auto" navbar>
        </Nav>
      </Navbar>
    );
  };
}


export default Bottom;
