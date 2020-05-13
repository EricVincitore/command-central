import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";
import { Button } from 'reactstrap';
import {Input} from "../components/Form";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Footer from "../components/Footer";
import SaveBtn from "../components/SaveBtn";



class Database extends Component {
    state = {
      cards: [],
      savedCards: [],
      layout:"",
      name: "",
      cardName: "",
      user:false,
      username: ""
    };

    componentDidMount(){
      console.log(sessionStorage.getItem("user"))
      if (sessionStorage.getItem("user") !== null) {
        this.setState({
          user: !this.state.user,
          username : sessionStorage.getItem("user")
        });
      };
    };

    toggle = () => {
      this.setState({
          isOpen: !this.state.isOpen
      });
    };

    imageSize = event => {
      event.preventDefault();
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

    saveCard = (card) => {

      this.setState({
        cardName: card.name
      }, () => {
        console.log(this.state.cardName) // this prints correct cardName (we used callback)
      });
    
      // console.log(this.state.cardName) // this will not print the correct card name because setState is async / batch operation
    
      API.SaveCard({
        name: card.name // use card object Or move this code in callback shown above
      })
      .then((response) => {
        console.log("saved following card")
        console.log(response)
      })
    };

  render() {
    return (
      <div className="page">
        <Container fluid>
          <Row>
            <Col md="12" sm="12">
              <Jumbotron />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="5" style={{textAlign:"center"}}>
            <h1 style={{textAlign:"center", color:"#fff"}}>Card Search</h1>
              <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Search Term (Required)"
              />
              <Button className="submitBtn" style={{backgroundColor:"#5fb9ce", color:"#fff"}}
                  disabled={!(this.state.name)}
                  onClick={this.handleFormSubmit}>Search by Name
              </Button>{' '}
              <Button className="submitBtn" style={{backgroundColor:"#4e7781", color:"#fff"}}
                  disabled={!(this.state.name)}
                  onClick={this.handleOracleSubmit}>Search by Text
              </Button>{' '}
              <br/>
              {sessionStorage.getItem("user") !== null ||  this.state.username !== "" ? (
                <h1 style={{color:"#fff"}}>{this.state.username}'s Wishlist</h1>

                ,this.state.savedCards.length === 0 ? (
                  <h4 style={{color:"#fff"}}>Click the "Save Card" button to add a card to your wishlist.</h4>
                ) : (
                  <List>

                  </List>
                )

                ):(
                  <h1 style={{color:"#fff"}}>Log In to use the Wishlist</h1>
                )}
                
            </Col>
          
            <Col sm="12" md="7">
              <h1 style={{textAlign:"center", color:"#fff"}}>Results</h1>
              {this.state.cards.length ? (
                <List>
                  {console.log(this.state.cards)}
                  {this.state.cards.map(card => {
                    return (  
                      <ListItem style={{textAlign:"left"}} key={card.name}>
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
                      {sessionStorage.getItem("user") !== null ||  this.state.username !== "" ? (
                        <SaveBtn
                        onClick={() => this.saveCard(card)}
                        className="submitBtn save-btn btn"
                        style={{ backgroundColor: '#4e7781', color: '#fff' }}
                      />
                      ):(
                        ""
                      )}
                      </ListItem>
                    )
                  })
                }
                </List>
              ) : (
                <h3 style={{textAlign:"center", color:"#fff"}}>No Results to Display</h3>
              )}
            </Col>
          </Row>
          <br/>
        </Container>
      <Footer/>
      </div>
    );
  }
}

export default Database;