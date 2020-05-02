import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div style={{textAlign:"center"}}>
      <Jumbotron className="mt-5 jumbo" fluid >
        <Container fluid>
          <h1 className="display-3" style={{color:"#2b3d52"}}>Command Central</h1>
          <p className="lead" style={{color:"#2b3d52"}}>The central source for all aspects of the Commander format.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;