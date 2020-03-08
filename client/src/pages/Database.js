import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";
import { Button } from 'reactstrap';
import {Input} from "../components/Form";
import API from "../utils/API";


class Database extends Component {
    state = {
        cards: [],
        name: "",
        cmc: "",
        set: "",
        rarity: "",
        description: "",
        price: "",
        image: ""
    };


    findCard = (query) => {
        API.search(query)
        .then(res => {
            console.log(res.data)
            this.setState({ cards: res.data })
        })
          .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name) {
          this.findCard(this.state.name)
        }
    };
 

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md="12" sm="12">
            <Jumbotron/>
          </Col>
        </Row>
        <Row>
            <Col sm="12" md="6">
                <Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="Search Term (Required)"
                />
                <Button color="primary"
                    disabled={!(this.state.name)}
                    onClick={this.handleFormSubmit}>Search by Name
                </Button>{' '}
                <Button color="info"
                    disabled={!(this.state.name)}
                    onClick={this.handleFormSubmit}>Search by Text
                </Button>{' '}
            </Col>
        </Row>

      </Container>
    );
  }
}

export default Database;