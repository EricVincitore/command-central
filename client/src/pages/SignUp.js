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


class SignUp extends Component {
 

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
                    <CardTitle><h4>Command Central Signup</h4></CardTitle>
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
                        <Col md="1" sm="1"/>
                        <Col md="8" sm="11">
                        <Button color="info">Sign Up</Button>
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
    );
  }
}

export default SignUp;