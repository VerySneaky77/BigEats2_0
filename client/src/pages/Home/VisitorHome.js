import React, { Component } from "react";
import { Jumbotron, Media, Container, Card, Row, Col } from "reactstrap";
import Carousel from "../../components/Carousel";
import "./style.css";

const pizza = require('../../images/pizza.jpg');
const burger = require('../../images/burger.jpg');
const chicken = require('../../images/chicken.jpeg');
const hotdog = require('../../images/hot dog.jpg');

class VisitorHome extends Component {
    render() {
        return (
            <>
                <div className="carousel-container">
                    <Carousel className="carousel"/>
                </div>
                <Jumbotron fluid className="tranparent" id="ptag">
                    <Container>
                        <p>
                            The world’s best hot dogs, sausages, burgers and chicken sandwiches, cooked just the way you like it over a glowing bed of real hardwood charcoal.
                        </p>
                    </Container>
                </Jumbotron>
                <Card fluid className="tranparentbox">
                    <Container>
                        <div className="image-box">
                            <Media src={burger} className="image" fluid />
                        </div>
                        <p className="discriptiion">
                            Try one of our
                            delicious specialty
                            pizzas and find your
                            new favorite!
                        </p>
                    </Container>
                </Card>
                <Card fluid className="tranparentbox">
                    <Container>
                        <div className="image-box">
                            <Media src={chicken} className="image" fluid />
                        </div>
                        <p className="discriptiion">
                            Start your summer
                            right with fried
                            Chicken
                        </p>
                    </Container>
                </Card>
                <Card fluid className="tranparentbox">
                    <Container>
                        <div className="image-box">
                            <Media src={hotdog} className="image" fluid />
                        </div>
                        <p className="discriptiion">
                            Classic and custome made
                            hotdogs
                        </p>
                    </Container>
                </Card> 
            </>
        )
    }
}

export default VisitorHome;