import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";
import { Button } from 'reactstrap';
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Footer from "../components/Footer";

class Metagame extends Component {
 
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
      <div className="page metagamePage">
        <Container fluid>
          <Row>
            <Col md="12" sm="12">
              <Jumbotron/>
            </Col>
          </Row>
          <Row>
            <Col md="4" sm="2"/>
            <Col md="4" sm="8">
              <Button onClick={this.handleSearch} className="submitBtn" color="info">
                Click here to see the current metagame for the commander format!
              </Button>{' '}
            </Col>
            <Col md="4" sm="2"/>
          </Row>
          <Row>
            <Col md="6" sm="12">
              <h3 className="metagameH">Metagame:</h3>
              <br/>
              {this.state.metagame.length ? (
                
                <List>
                  
                  {this.state.metagame.slice(0,12).map(deck => {
                    return ( 
                      
                      <ListItem key = {deck.title}>
                      <img className="DeckImg" src = {deck.img} alt={deck.title}/>
                      <a href={deck.link} target="_blank" rel="noopener noreferrer"><h4 style={{color:"#5fb9ce"}}>{deck.title}</h4></a>
                      <p className="metagameP">Metagame Percent: {deck.meta}</p>
                      <p className="metagameP">Common cards: {deck.list}</p>
                      <p className="metagameP">Example Price: {deck.price}</p>
                      
                      </ListItem>
                    )

                  })
                    
                }
                </List>
              ) : (
                <h4 className="metagameH">Click the button above to see the metagame</h4>
              )}

            </Col>
            <Col md="6" sm="12">
              <h3 className="metagameH">Budget Metagame:</h3>
              <br/>
              {this.state.metagame.length ? (
                
                <List>
                  
                  {this.state.metagame.slice(13,20).map(deck => {
                    return ( 
                      
                      <ListItem key = {deck.title}>
                        <img className="DeckImg" src = {deck.img} alt={deck.title}/>
                        <a href={deck.link} target="_blank" rel="noopener noreferrer"><h4 style={{color:"#5fb9ce"}}>{deck.title}</h4></a>
                        <p className="metagameP">Common cards: {deck.list}</p>
                        <p className="metagameP">Example Price: {deck.price}</p>
                      
                      </ListItem>
                    )

                  })
                    
                }
                </List>
              ) : (
                <h4 className="metagameH">Click the button above to see the metagame</h4>
              )}


            </Col>
          </Row>
        </Container>
        <br/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default Metagame;