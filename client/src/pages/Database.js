import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";
import { Button } from 'reactstrap';
import {Input} from "../components/Form";
import API from "../utils/API";
import { List, ListItem } from "../components/List";


class Database extends Component {
    state = {
      cards: [],
      layout:"",
      name: "",
      cmc: "",
      set: "",
      rarity: "",
      description: "",
      commanderLegal:"",
      price: "",
      image: ""
    };

    findCard = (query) => {
      API.search(query)
      .then(res => {
          this.setState({ cards: res.data.data })
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

    handleOracleSubmit = event => {
      event.preventDefault();
      if (this.state.name) {
          this.findCard("o:" + this.state.name)
      }
    };

    checkPrice = (price) => {
      if (price === null) {
        return "Price Unavailable"
      } else {
        return price
      };
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
            <Col sm="12" md="5">
                <h1>Card Search</h1>
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
                    onClick={this.handleOracleSubmit}>Search by Text
                </Button>{' '}
            </Col>
        
          <Col sm="12" md="7">
            <h1>Results</h1>
            {this.state.cards.length ? (
              <List>
                {console.log(this.state.cards)}
                {this.state.cards.map(card => {
                  return (  
                    <ListItem key={card.name}>
                    {card.layout === "transform" ? (
                      <div>
                        <img className="cardImg" src={card.card_faces[1].image_uris.small} alt={card.card_faces[1].name}/>
                        <img className="cardImg" src={card.card_faces[0].image_uris.small} alt={card.card_faces[0].name}/>
                      </div>
                    ):(
                      <img className="cardImg" src={card.image_uris.small} alt={card.name}/>
                    )}
                    <h4>{card.name}</h4>
                    <h6>{card.mana_cost}</h6>
                    <h6>{card.type_line}</h6>
                    <h6>{card.set_name}</h6>
                    <h6>{card.rarity}</h6>
                    {card.layout === "transform" ? (
                      <div>
                        <p>{card.card_faces[0].name}: {card.card_faces[0].oracle_text}</p>
                        <p>{card.card_faces[1].name}: {card.card_faces[1].oracle_text}</p>
                      </div>
                    ):(
                      <p>{card.oracle_text}</p>
                    )}
                    <p>Commander Legality: {card.legalities.commander}</p>
                    <p>Price in USD: {this.checkPrice(card.prices.usd)}</p>
                    <p>Foil Price in USD: {this.checkPrice(card.prices.usd_foil)}</p>
                    </ListItem>
                  )
                })
              }
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Database;