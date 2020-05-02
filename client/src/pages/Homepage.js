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
    this.cc();
    
  };


  render() {
    return (
      <div className="page" style={{textAlign:"center"}}>
        <Container fluid>
          <Row>
            <Col md="12" sm="12">
              <Jumbotron/>
            </Col>
          </Row>
          <Row>
            <Col md="4" sm="2"/>
            <Col md="4" sm="8">
              <Button className="submitBtn" style={{backgroundColor:"#5fb9ce", color:"#fff"}}
              onClick={this.handleSearch}>
                Click here to stay up to date with the commander format!
              </Button>{' '}
            </Col>
            <Col md="4" sm="2"/>
          </Row>
          <br/>
          <Row>
            <Col md="4" sm="12">
              <h3 style={{color:"#fff"}}>EdhRec:</h3>
              <br/>
              <div>
              {this.state.EdhRecArticles.length ? (
                  
                  <List>
                    
                    {this.state.EdhRecArticles.map(article => {
                      return ( 
                        
                        <ListItem key = {article.title}>
                          <a href={article.link} target="_blank" rel="noopener noreferrer">
                          <img class="articleImg" src = {article.img} alt={article.title}/>
                          <h4 style={{color:"#5fb9ce"}}>{article.title}</h4>
                          </a>
                          <p style={{color:"#2b3d52"}}>{article.description}</p>
                        
                        </ListItem>
                      )

                    })
                      
                  }
                </List>
                ) : (
                  <h4 style={{color:"#fff"}}>Click the button above to see the latest content.</h4>
                )}
              </div>
            </Col>
            <Col md="4" sm="12">
              <h3 style={{color:"#fff"}}>The Command Zone:</h3>
              <br/>
              <div>
                {this.state.CZArticles.length ? (
                  <List>
                    
                    {this.state.CZArticles.map(article => {
                      return ( 
                        
                        <ListItem key = {article.title}>
                          <a href={article.link} target="_blank" rel="noopener noreferrer">
                          <img class="articleImg" src = {article.img} alt={article.title}/>
                          <h4 style={{color:"#5fb9ce"}}>{article.title}</h4>
                          </a>
                          <p style={{color:"#2b3d52"}}>{article.description}</p>
                          
                        </ListItem>
                      )

                    })
                  }
                  </List>
                  ) : (
                    <h4 style={{color:"#fff"}}>Click the button above to see the latest content.</h4>
                  )}
              </div>
            </Col>
            <Col md="4" sm="12">
            <h3 style={{color:"#fff"}}>Tolarian Community College:</h3>
            <br/>
            <div>
              {this.state.CCArticles.length ? (
                <List>
                  
                  {this.state.CCArticles.map(article => {
                      return ( 
                          
                        <ListItem key = {article.title}>
                          <iframe title = {article.title} class="articleImg" src = {article.img} alt={article.title}/>
                          <a href={article.link} target="_blank" rel="noopener noreferrer">
                          <h4 style={{color:"#5fb9ce"}}>{article.title}</h4>
                          </a>
                          <p style={{color:"#2b3d52"}}>{article.description}</p>
                          
                        </ListItem>
                      )

                    })    
                  }
                </List>
                ) : (
                  <h4 style={{color:"#fff"}}>Click the button above to see the latest content.</h4>
                )}
            </div>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Homepage;