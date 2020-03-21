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


class Login extends Component {
 
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
    console.log(this.state.username)
    console.log(this.state.password)
    console.log("_______________________________")
    API.login({
      username: this.state.username,
      password: this.state.password
    })
    .then((data) => {
      sessionStorage.setItem("user",data.user)
      window.location.href = "/homepage"
    })
  }

  handleFacebookLogin = (event) => {
    event.preventDefault();
    API.FBLogin()
    .then((data) => {
      // sessionStorage.setItem("user", data.user)
      console.log("logged in with facebook");
    })
  }

  render() {
    return (
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
                    <CardTitle><h4>Command Central Login</h4></CardTitle>
                    </CardBody>
                    <CardBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="text" onChange={this.handleInputChange} name="username" id="signUpUsername" placeholder="Your Username" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" onChange={this.handleInputChange} name="password" id="SignUpPassword" placeholder="A Password you will Remember" />
                        </FormGroup>
                        </Form>                    
                    </CardBody>
                    <Row>
                        <Col md="1"/>
                        <Col md="2" sm="12">
                        <Button onClick={this.handleFormSubmit} color="danger">Log In</Button>
                        </Col>
                        <Col md="5"/>
                        <Col md="3" sm="12">
                        <Button color="primary" onClick={this.handleFacebookLogin}>Log in with Facebook</Button>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="1"/>
                        <Col md="8" sm="12">
                        <Link to="/signup"><Button color="info">Sign Up with Command Central</Button></Link>
                        </Col>
                    </Row>
                    <br/> 
                </Card>
                <br/>
            </Col>
            <Col md="2"/>
        </Row>
      </Container>
    );
  }
}

export default Login;