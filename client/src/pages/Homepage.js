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
    CCArticles: [],
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

  cc = () => {
    API.cc()
    .then(res => {
      console.log(res)
    this.setState({CCArticles: res.data})
    })
    .catch(err => console.log(err));
  }
  

  handleSearch = event => {
    event.preventDefault();
    this.edhRec();
    this.commandZone();
    // this.cc();
    
  };


  render() {
    return (
      <div className="page homepagePage">
        <Container fluid>
          <Row>
            <Col md="12" sm="12">
              <Jumbotron/>
            </Col>
          </Row>
          <Row>
            <Col md="4" sm="2"/>
            <Col md="4" sm="8">
              <Button className="submitBtn" color="info"
              onClick={this.handleSearch}>
                Click here to stay up to date with the commander format!
              </Button>{' '}
            </Col>
            <Col md="4" sm="2"/>
          </Row>
          <br/>
          <Row>
            <Col md="4" sm="12">
              <h3 className="articleHeader">EdhRec:</h3>
              <br/>
              <div>
              {this.state.EdhRecArticles.length ? (
                  
                  <List>
                    
                    {this.state.EdhRecArticles.map(article => {
                      return ( 
                        
                        <ListItem key = {article.title}>
                          <a href={article.link} target="_blank" rel="noopener noreferrer">
                          <img className="articleImg edhrecImg" src = {article.img} alt={article.title}/>
                          <h4 className="articleH4">{article.title}</h4>
                          </a>
                          <p className="articleP">{article.description}</p>
                        
                        </ListItem>
                      )

                    })
                      
                  }
                </List>
                ) : (
                  <h4 className="articleFiller">Click the button above to see the latest content.</h4>
                )}
              </div>
            </Col>
            <Col md="4" sm="12">
              <h3 className="articleHeader">The Command Zone:</h3>
              <br/>
              <div>
                {this.state.CZArticles.length ? (
                  <List>
                    
                    {this.state.CZArticles.map(article => {
                      return ( 
                        
                        <ListItem key = {article.title}>
                          <a href={article.link} target="_blank" rel="noopener noreferrer">
                          <img className="articleImg CZImage" src = {article.img} alt={article.title}/>
                          <h4 className="articleH4">{article.title}</h4>
                          </a>
                          <p className="articleP">{article.description}</p>
                          
                        </ListItem>
                      )

                    })
                  }
                  </List>
                  ) : (
                    <h4 className="articleFiller">Click the button above to see the latest content.</h4>
                  )}
              </div>
            </Col>
            <Col md="4" sm="12">
            <h3 className="articleHeader" >Commander Clash:</h3>
            <br/>
            <div>
              {this.state.CCArticles.length ? (
                <List>
                  
                  {this.state.CCArticles.map(article => {
                      return ( 
                          
                        <ListItem key = {article.title}>
                          <a href={article.link} target="_blank" rel="noopener noreferrer">
                          <img className="articleImg" src = {article.img} alt={article.title}/>
                          <h4 className="articleH4">{article.title}</h4>
                          </a>
                          <p className="articleP">{article.description}</p>
                          
                        </ListItem>
                      )

                    })    
                  }
                </List>
                ) : (
                  <h4 className="articleFiller">Click the button above to see the latest content.</h4>
                )}
            </div>
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

export default Homepage;