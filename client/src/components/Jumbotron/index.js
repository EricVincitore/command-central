import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{backgroundColor:"#c0dcdd"}}>
        <Container fluid>
          <h1 className="display-3">Command Central</h1>
          <p className="lead">The central source for all aspects of the Commander format.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;