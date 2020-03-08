import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";


class Homepage extends Component {
 

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron/>
          </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <h2>Game Philosophy</h2>
                <p>
                    Commander is for fun. It’s a socially interactive, multiplayer Magic: the Gathering format full of wild interactions and epic plays, specifically designed as an alternative to tournament Magic. As is fitting for a format in which you choose an avatar to lead your forces into battle, Commander focuses on a resonant experience. Each game is a journey the players share, relying on a social contract in which each player is considerate of the experiences of everyone involved–this promotes player interaction, inter-game variance, a variety of play styles, and a positive communal atmosphere. At the end of an ideal Commander game, someone will have won, but all participants will have had the opportunity to express themselves through their deck building and game play.
                </p>
                <a href="https://mtgcommander.net/index.php/the-philosophy-of-commander/" target="_blank">
                    <strong>
                        Click here for more information on the Commander Philosophy
                    </strong>
                </a>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col size="md-12">
                <h2>Rules and Regulations</h2>
                <p>
                    Commander is a unique format that has its own set of rules to ballance the game for a multiplayer environment
                </p>
                <a href="https://mtgcommander.net/index.php/the-philosophy-of-commander/" target="_blank">
                    <strong>
                        Click here for more information on the Commander Philosophy
                    </strong>
                </a>
            </Col>
        </Row>
        

      </Container>
    );
  }
}

export default Homepage;