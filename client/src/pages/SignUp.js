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

// const bodyStyle = {
//   display: "flex",
//   flexDirection: "column",
//   backgroundColor: "#2b3d52",
//   height: "100%",
//   backgroundAttachment: "fixed",
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   top: 0,
//   bottom: 0,
//   bottomMargin:0
// }


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
        password: this.state.password
      })
      .then((response) => {
        let user = JSON.stringify(response.data)
        window.sessionStorage.setItem("user", JSON.parse(user).name)
        window.location.href = "/"
      })
      .catch(function(err) {
      })
    }
  }
 

  render() {
    return (
      <div className="page">
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
                              <Label for="exampleName" className="loginLabel">Name</Label>
                              <Input type="text" onChange={this.handleInputChange} value={this.state.name} name="name" id="signUpName" placeholder="John Smith" />
                          </FormGroup>
                          <FormGroup>
                              <Label for="exampleUsername" className="loginLabel">Username</Label>
                              <Input type="text" onChange={this.handleInputChange} value={this.state.username} name="username" id="signUpUsername" placeholder="Your Username" />
                          </FormGroup>
                          <FormGroup>
                              <Label for="exampleEmail" className="loginLabel">Email</Label>
                              <Input type="text" onChange={this.handleInputChange} value={this.state.email} name="email" id="signUpEmail" placeholder="YourEmail@example.com" />
                          </FormGroup>
                          <FormGroup>
                              <Label for="examplePassword"  className="loginLabel">Password</Label>
                              <Input type="password" onChange={this.handleInputChange} value={this.state.password} name="password" id="SignUpPassword" placeholder="A Password you will Remember" />
                          </FormGroup>
                          <Button 
                            onClick={this.handleFormSubmit} 
                            color="secondary" 
                            className="submitBtn"
                            disabled={!(this.state.name) ||!(this.state.email) || !(this.state.username) || !(this.state.password)}>
                              Sign Up
                          </Button>
                          <br/>
                          <br/>
                          <Link to="/signin"><Button color="info" className="submitBtn">Return to Login</Button></Link>
                          </Form>                    
                      </CardBody>
                  </Card>
                  <br/>
              </Col>
              <Col md="2"/>
          </Row>
        </Container>
        <br/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default SignUp;