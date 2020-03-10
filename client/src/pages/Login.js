import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";
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
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="signUpEmail" placeholder="YourEmail@example.com" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="SignUpPassword" placeholder="A Password you will Remember" />
                        </FormGroup>
                        </Form>                    
                    </CardBody>
                    <Row>
                        <Col md="1"/>
                        <Col md="2" sm="12">
                        <Button color="primary">Log In</Button>
                        </Col>
                        <Col md="5"/>
                        <Col md="3" sm="12">
                        <Button color="danger">Log in with Google</Button>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="1"/>
                        <Col md="8" sm="12">
                        <Link to="/signup"><Button color="info">Sign Up</Button></Link>
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