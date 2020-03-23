import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { 
    Button,
    Form,
    FormGroup, 
    Label, Input, 
    Card,
    CardBody, 
    CardTitle,
} from 'reactstrap';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


class SignUp extends Component {

  state = {
    user: [],
    name: "",
    email: "",
    username: "",
    password: ""
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("___________________________")
    console.log(event.target.value)
      this.setState({
        [name]: value
      });
  }

  handleFormSubmit = (event) => {

    if (this.state.email === "" || this.state.password === "" ||this.state.username === "" || this.state.name === "") {
      alert("All fields must be filled out")
    } else {
      API.signUp({
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.username
      })
      .then((data) => {
        sessionStorage.setItem("user",data.user)
        window.location.href = "/homepage"
      })
    }
  }
 

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
              <Col md="2"/>
              <Col md="8" sm="12">
                  <Card>
                      <CardBody>
                      <CardTitle><h4>Command Central Signup</h4></CardTitle>
                      </CardBody>
                      <CardBody>
                      <Form>
                      <FormGroup>
                              <Label for="exampleName">Name</Label>
                              <Input type="text" onChange={this.handleInputChange} value={this.state.name} name="name" id="signUpName" placeholder="John Smith" />
                          </FormGroup>
                          <FormGroup>
                              <Label for="exampleUsername">Username</Label>
                              <Input type="text" onChange={this.handleInputChange} value={this.state.username} name="username" id="signUpUsername" placeholder="Your Username" />
                          </FormGroup>
                          <FormGroup>
                              <Label for="exampleEmail">Email</Label>
                              <Input type="email" onChange={this.handleInputChange} value={this.state.email} name="email" id="signUpEmail" placeholder="YourEmail@example.com" />
                          </FormGroup>
                          <FormGroup>
                              <Label for="examplePassword">Password</Label>
                              <Input type="password" onChange={this.handleInputChange} value={this.state.password} name="password" id="SignUpPassword" placeholder="A Password you will Remember" />
                          </FormGroup>
                          </Form>                    
                      </CardBody>
                      <Row>
                          <Col md="1" sm="1"/>
                          <Col md="8" sm="11">
                          <Button onClick={this.handleFormSubmit} color="info">Sign Up</Button>
                          </Col>
                      </Row>
                      <br/>
                      <Row>
                          <Col md="1" sm="1"/>
                          <Col md="8" sm="11">
                          <Link to="/login"><Button color="primary">Return to Login</Button></Link>
                          </Col>
                      </Row>
                      <br/> 
                  </Card>
                  <br/>
              </Col>
              <Col md="2"/>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default SignUp;