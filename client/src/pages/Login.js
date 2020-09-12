import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API"
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
 
class SignIn extends Component {
 
  state = {
    user: [],
    username: "",
    password: ""
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = (event) => {
    if (this.state.password === "" ||this.state.username === "") {
      alert("All fields must be filled out to login!")
    } else {
      console.log(this.state.username)
      console.log(this.state.password)
      console.log("_______________________________")
      API.Login({
        username: this.state.username,
        password: this.state.password
      })
      .then((response) => {
        let user = JSON.stringify(response.data)
        window.sessionStorage.setItem("user", JSON.parse(user).name)
        window.location.href = "/"
      })
      .catch(console.error())
    }
  }

  render() {
    return (
      <div className="page" >
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
                      <CardTitle><h4 className="loginLabel">Command Central Login</h4></CardTitle>
                      </CardBody>
                      <CardBody>
                      <Form>
                          <FormGroup>
                              <Label for="exampleEmail" className="loginLabel">Username</Label>
                              <Input type="text" onChange={this.handleInputChange} value={this.state.username} name="username" id="signUpUsername" placeholder="Your Username" />
                          </FormGroup>
                          <FormGroup>
                              <Label for="examplePassword" className="loginLabel">Password</Label>
                              <Input type="password" onChange={this.handleInputChange} value={this.state.password} name="password" id="SignUpPassword" placeholder="Your Password" />
                          </FormGroup>
                          <Button 
                            onClick={this.handleFormSubmit} 
                            color="info"
                            disabled={!(this.state.username) || !(this.state.password)}>
                              Log In
                          </Button>
                          <br/>
                          <br/>
                          <Link to="/signup"><Button color="secondary" className="submitBtn">Sign Up with Command Central</Button></Link>
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

export default SignIn;