import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";



class Resources extends Component {
  render() {
    return (
        <div className="page" style={{textAlign:"center"}}>
            <Container fluid>
                <Row>
                <Col md="12" sm="12">
                    <Jumbotron/>
                </Col>
                </Row>
                <Row>
                    <Col md="12" sm="12">
                        <h2 style={{color:"#fff"}}>Game Philosophy</h2>
                        <p style={{color:"#fff"}}>
                            Commander is for fun. It’s a socially interactive, multiplayer Magic: the Gathering format full of wild interactions and epic plays, specifically designed as an alternative to tournament Magic. As is fitting for a format in which you choose an avatar to lead your forces into battle, Commander focuses on a resonant experience. Each game is a journey the players share, relying on a social contract in which each player is considerate of the experiences of everyone involved–this promotes player interaction, inter-game variance, a variety of play styles, and a positive communal atmosphere. At the end of an ideal Commander game, someone will have won, but all participants will have had the opportunity to express themselves through their deck building and game play.
                        </p>
                        <a style={{color:"#5fb9ce"}} href="https://mtgcommander.net/index.php/the-philosophy-of-commander/" target="_blank" rel="noopener noreferrer">
                            <strong>
                                Click here for more information on the Commander Philosophy
                            </strong>
                        </a>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md="12" sm="12">
                        <h2 style={{color:"#fff"}}>Rules and Regulations</h2>
                        <p style={{color:"#fff"}}>
                            Commander is a unique format that has its own set of rules to balance the game for a multiplayer environment. A basic introduction to the rules of the format follows.
                        </p>
                        <h4 style={{color:"#fff"}}>Deck Construction Rules</h4>
                        <ul style={{color:"#fff", listStyleType: "none"}}>
                            <li>Players choose a legendary creature as the “commander” for their deck.</li>
                            <li>A card’s colour identity is its color plus the color of any mana symbols in the card’s rules text.The cards in a deck may not have any colours in their colour identity which are not in the colour identity of the deck’s commander.</li>
                            <li>A Commander deck must contain exactly 100 cards, including the commander.</li>
                            <li>With the exception of basic lands, no two cards in the deck may have the same English name. </li>
                        </ul>
                        <h4 style={{color:"#fff"}}>Play Rules</h4>
                        <ul style={{color:"#fff", listStyleType: "none"}}>
                            <li>Players begin the game with 40 life.</li>
                            <li>Commanders begin the game in the Command Zone. While a commander is in the command zone, it may be cast, subject to the normal timing restrictions for casting creatures. Its owner must pay two generic mana for each time it was previously cast from the command zone; this is an additional cost.</li>
                            <li>If a commander would be put into a library, hand, graveyard or exile from anywhere, its owner may choose to move it to the command zone instead.</li>
                            <li>If a player has been dealt 21 points of <strong>combat damage</strong> by a particular Commander during the game, that player loses a game.</li>
                        </ul>
                        <a style={{color:"#5fb9ce"}} href="https://magic.wizards.com/en/content/commander-format" target="_blank" rel="noopener noreferrer">
                            <strong>
                                Click here for the full gameplay introduction from Wizards of the Coast.
                            </strong>
                        </a>
                        <br/>
                        <a style={{color:"#5fb9ce"}} href="https://mtgcommander.net/index.php/rules/" target="_blank" rel="noopener noreferrer">
                            <strong>
                                Click here for the full rules list from the Commander Rules Committee.
                            </strong>
                        </a>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md="12" sm="12">
                        <h2 style={{color:"#fff"}}>Banned Card List</h2>
                        <p style={{color:"#fff"}}>
                        Commander has a ban-list just as all the other formats do. The Commander Rules Committee is in charge of banning cards and they are a completely separate entity from Wizard of the Coast. The rules committee expresses that they have set an official ban-list that most players follow but if there are any cards on it that one wants to play they just need to talk to their playgroup to play the card. The same can be applied if players in the playgroup feel a certain card should have a "house-ban." Ante card and Conspiracy cards are not legal in Commander.  
                        </p>
                        <a style={{color:"#5fb9ce"}} href="https://mtgcommander.net/index.php/banned-list/" target="_blank" rel="noopener noreferrer">
                            <strong>
                                Click here for the official Commander banned card list.
                            </strong>
                        </a>
                        <br/>
                        <a style={{color:"#5fb9ce"}} href="https://gatherer.wizards.com/Pages/Search/Default.aspx?action=advanced&special=true&type=+%5b%22Conspiracy%22%5d" target="_blank" rel="noopener noreferrer">
                            <strong>
                                Click here for the list of Conspiracy cards.
                            </strong>
                        </a>
                        <br/>
                        <a style={{color:"#5fb9ce"}} href="https://gatherer.wizards.com/Pages/Search/Default.aspx?action=advanced&text=+%5b%22%20ante.%22%5d" target="_blank" rel="noopener noreferrer">
                            <strong>
                                Click here for the list of Ante cards.
                            </strong>
                        </a>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md="12" sm="12">
                        <h2 style={{color:"#fff"}}>Privacy Policy</h2>
                        <a style={{color:"#5fb9ce"}} href="https://www.iubenda.com/privacy-policy/61199406" class="iubenda-white iubenda-embed" title="Privacy Policy ">
                            <strong>
                                Command Central's Privacy Policy
                            </strong>
                        </a>
                    </Col>
                </Row>
            </Container>
            <br/>
            <br/>
            <Footer/>

        </div>
    );
  }
}

export default Resources;