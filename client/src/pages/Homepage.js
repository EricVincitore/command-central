import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";
import { Button } from 'reactstrap';
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Footer from "../components/Footer";


class Homepage extends Component {
 
  state = {
    EdhRecArticles: [],
    CZArticles: [],
    TCCArticles: [],
    title: "",
    img: "",
    description: "",
    link: ""
  };

  edhRec = () => {
    API.edhRec()
    .then(res => {
      console.log(res)
    this.setState({EdhRecArticles: res.data})
    })
    .catch(err => console.log(err));
  }

  commandZone = () => {
    API.commandZone()
    .then(res => {
      console.log(res)
    this.setState({CZArticles: res.data})
    })
    .catch(err => console.log(err));
  }

  tcc = () => {
    API.tcc()
    .then(res => {
      console.log(res)
    this.setState({TCCArticles: res.data})
    })
    .catch(err => console.log(err));
  }
  

  handleSearch = event => {
    event.preventDefault();
    this.edhRec();
    this.commandZone();
    this.tcc();
    
  };


  render() {
    return (
      <div>
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
            <h3>EdhRec:</h3>
            {this.state.EdhRecArticles.length ? (
                
                <List>
                  
                  {this.state.EdhRecArticles.map(article => {
                    return ( 
                      
                      <ListItem key = {article.title}>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                        <img class="articleImg" src = {article.img} alt={article.title}/>
                        <h4>{article.title}</h4>
                        </a>
                        <p>{article.description}</p>
                      
                      </ListItem>
                    )

                  })
                    
                }
                </List>
              ) : (
                <h4>Click the button above to see the latest content.</h4>
              )}

            </Col>
            <Col md="4" sm="12">
            <h3>The Command Zone:</h3>
              {this.state.CZArticles.length ? (
                  <List>
                    
                    {this.state.CZArticles.map(article => {
                      return ( 
                        
                        <ListItem key = {article.title}>
                          <a href={article.link} target="_blank" rel="noopener noreferrer">
                          <img class="articleImg" src = {article.img} alt={article.title}/>
                          <h4>{article.title}</h4>
                          </a>
                          <p>{article.description}</p>
                          
                        </ListItem>
                      )

                    })
                      
                  }
                  </List>
                ) : (
                  <h4>Click the button above to see the latest content.</h4>
                )}
            </Col>
            <Col md="4" sm="12">
            <h3>Tolarian Community College:</h3>

            {this.state.TCCArticles.length ? (
              <List>
                
                {this.state.TCCArticles.map(article => {
                    return ( 
                        
                      <ListItem key = {article.title}>
                      <iframe title = {article.title} class="articleImg" src = {article.img} alt={article.title}/>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                        <h4>{article.title}</h4>
                        </a>
                        <p>{article.description}</p>
                        
                      </ListItem>
                    )

                  })    
                }
                </List>
              ) : (
                <h4>Click the button above to see the latest content.</h4>
              )}
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Homepage;