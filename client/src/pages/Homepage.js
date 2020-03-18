import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";
import { Button } from 'reactstrap';
import API from "../utils/API";
import { List, ListItem } from "../components/List";


class Homepage extends Component {
 
  state = {
    articles: [],
    title: "",
    img: "",
    description: "",
    link: ""
  };

  edhRec = () => {
    API.edhRec()
    .then(res => {
      console.log(res)
    this.setState({articles: res.data})
    })
    .catch(err => console.log(err));
  }
  

  handleSearch = event => {
    event.preventDefault();
    API.deleteHomepage()
    .then(res => {
      console.log("deleted all databases for homepage");
      this.edhRec()
    })
    .catch(err => console.log(err));

    // API.commandZone()
    // .then(res => {
    //   this.setState({ CZArticles: res })
    // })
    // .catch(err => console.log(err));

    // API.tcc()
    // .then(res => {
    //   this.setState({ TCCArticles: res })
    // })
    // .catch(err => console.log(err));

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
            <Button color="primary"
             onClick={this.handleSearch}>
              Click here to stay up to date with the commander format!
            </Button>{' '}
          </Col>
          <Col md="4" sm="2"/>
        </Row>
        <Row>
          <Col md="4" sm="12">
          {this.state.articles.length ? (
              <List>
                
                {this.state.articles.map(article => {
                  return (  
                    <ListItem key = {article.title}>

                    <h4>{article.title}</h4>
                    
                    </ListItem>
                  )

                })
                  
              }
              </List>
            ) : (
              <h3>Click the button above to see what is new with EdhRec</h3>
            )}

          </Col>
          <Col md="4" sm="12">

          </Col>
          <Col md="4" sm="12">

          </Col>
        </Row>
       
      </Container>
    );
  }
}

export default Homepage;
