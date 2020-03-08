import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";


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