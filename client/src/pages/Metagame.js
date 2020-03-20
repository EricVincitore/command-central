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
    list: "",
    price:"",
    link: ""
  };

  handleSearch = event => {
    event.preventDefault();
    API.metagame()
    .then(res => {
      console.log(res)
    this.setState({metagame: res.data})
    })
    .catch(err => console.log(err));
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
            <h3>Metagame:</h3>
            {this.state.metagame.length ? (
              
              <List>
                
                {this.state.metagame.slice(0,12).map(deck => {
                  return ( 
                     
                    <ListItem key = {deck.title}>
                    <a href={deck.link} target="_blank" rel="noopener noreferrer"><h4>{deck.title}</h4></a>
                    <p>Metagame Percent: {deck.meta}</p>
                    <p>Common cards: {deck.list}</p>
                    <p>Example Price: {deck.price}</p>
                     
                    </ListItem>
                  )

                })
                  
              }
              </List>
            ) : (
              <h4>Click the button above to see the metagame</h4>
            )}

          </Col>
          <Col md="6" sm="12">
            <h3>Budget Metagame:</h3>
            {this.state.metagame.length ? (
              
              <List>
                
                {this.state.metagame.slice(13,20).map(deck => {
                  return ( 
                     
                    <ListItem key = {deck.title}>
                      <a href={deck.link} target="_blank" rel="noopener noreferrer"><h4>{deck.title}</h4></a>
                      <p>Common cards: {deck.list}</p>
                      <p>Example Price: {deck.price}</p>
                     
                    </ListItem>
                  )

                })
                  
              }
              </List>
            ) : (
              <h4>Click the button above to see the metagame</h4>
            )}


          </Col>
        </Row>
       
      </Container>
    );
  }
}

export default Homepage;