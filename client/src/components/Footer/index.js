import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

class Bottom extends Component {
  

  render() {
    
    return(
    
      <Navbar className ="nav-bar fixed-bottom footerStyle" light expand="md">
      </Navbar>
    );
  };
}


export default Bottom;
