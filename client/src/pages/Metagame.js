import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";
import { Button } from 'reactstrap';
import API from "../utils/API";
import { List, ListItem } from "../components/List";

class Homepage extends Component {
 
  state = {
    metagame: [],
    title: "",
    img: "",
    meta: "",
    price:"",
    link: ""
  };

  handleSearch = event => {
    API.metagame()
    .then(res => {
      console.log(res)
    this.setState({metagame: res.data})
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md="12" sm="12">
            <Jumbotron/>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="2"/>
          <Col md="4" sm="8">
            <Button onClick={this.handleSearch} color="primary">
              Click here to see the current metagame for the commander format!
            </Button>{' '}
          </Col>
          <Col md="4" sm="2"/>
        </Row>
        <Row>
          <Col md="6" sm="12">
          
          </Col>
          <Col md="6" sm="12">
          
          </Col>
        </Row>
       
      </Container>
    );
  }
}

export default Homepage;