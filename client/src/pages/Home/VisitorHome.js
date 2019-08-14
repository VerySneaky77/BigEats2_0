import React, { Component } from "react";
import { Jumbotron, Media, Container, Card, Row, Col } from "reactstrap";
import Carousel from "../../components/Carousel";
import "./style.css";

const pictures = [
    new URL('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Parker_Training_Academy_Dutch_Barn%2C_Red_Hook%2C_NY.jpg/1200px-Parker_Training_Academy_Dutch_Barn%2C_Red_Hook%2C_NY.jpg'),
    new URL('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Parker_Training_Academy_Dutch_Barn%2C_Red_Hook%2C_NY.jpg/1200px-Parker_Training_Academy_Dutch_Barn%2C_Red_Hook%2C_NY.jpg'),
    new URL('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Parker_Training_Academy_Dutch_Barn%2C_Red_Hook%2C_NY.jpg/1200px-Parker_Training_Academy_Dutch_Barn%2C_Red_Hook%2C_NY.jpg')
]

class VisitorHome extends Component {
    render() {
        return (
            <>
                <div className="carousel-container">
                    <Carousel className="carousel" />
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
                            <Media src={pictures[0]} className="image" fluid />
                        </div>
                        <p className="discriptiion">Consequat do Lorem amet eu. Consequat est eu eu labore eiusmod aliquip pariatur nulla enim in consequat labore. Eu aute laboris amet in. Laborum reprehenderit aliquip aliquip anim esse incididunt nulla fugiat non cupidatat irure excepteur aliqua. Ipsum dolor eu excepteur voluptate enim nulla ex aute minim labore est incididunt cupidatat cillum. Et et aliquip dolor quis fugiat fugiat ad amet consectetur Lorem magna do cupidatat. Dolor consequat ullamco id ex nulla qui cupidatat id adipisicing deserunt consectetur deserunt excepteur cupidatat.</p>
                    </Container>
                </Card>
                <Card fluid className="tranparentbox">
                    <Container>
                        <div className="image-box">
                            <Media src={pictures[1]} className="image" fluid />
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
                            <Media src={pictures[2]} className="image" fluid />
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