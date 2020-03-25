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
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJ75gK9jAei2zwhvi3hVP1-CCgqw6HiZk",
  authDomain: "command-central-511fc.firebaseapp.com",
  databaseURL: "https://command-central-511fc.firebaseio.com",
  projectId: "command-central-511fc",
  storageBucket: "command-central-511fc.appspot.com",
  messagingSenderId: "229958608",
  appId: "1:229958608:web:3cd0bd5347bfd49f940fd5"
};

firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.FacebookAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});


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
    if (this.state.password === "" ||this.state.username === "") {
      alert("All fields must be filled out to login!")
    } else {
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
                      <CardTitle><h4 style={{color:"#2b3d52"}}>Command Central Login</h4></CardTitle>
                      </CardBody>
                      <CardBody>
                      <Form>
                          <FormGroup>
                              <Label for="exampleEmail" style={{color:"#2b3d52"}}>Username</Label>
                              <Input type="text" onChange={this.handleInputChange} value={this.state.username} name="username" id="signUpUsername" placeholder="Your Username" />
                          </FormGroup>
                          <FormGroup>
                              <Label for="examplePassword" style={{color:"#2b3d52"}}>Password</Label>
                              <Input type="password" onChange={this.handleInputChange} value={this.state.password} name="password" id="SignUpPassword" placeholder="Your Password" />
                          </FormGroup>
                          </Form>                    
                      </CardBody>
                      <Row>
                          <Col md="1"/>
                          <Col md="2" sm="12">
                            <Button onClick={this.handleFormSubmit} style={{backgroundColor:"#4e7781", color:"#fff"}} className="submitBtn">Log In</Button>
                          </Col>
                          <Col md="5"/>
                          <Col md="3" sm="12">
                            <Button onClick={this.signInWithPopup}>Sign in with Facebook</Button>
                          </Col>
                      </Row>
                      <br/>
                      <Row>
                          <Col md="1"/>
                          <Col md="8" sm="12">
                          <Link to="/signup"><Button style={{backgroundColor:"#5fb9ce", color:"#fff"}} className="submitBtn">Sign Up with Command Central</Button></Link>
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

export default Login;