import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer"


class Homepage extends Component {
 

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron/>
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default Homepage;