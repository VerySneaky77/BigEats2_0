import React, { Component } from "react";
import { Jumbotron, Media, Container, Card, Row, Col } from "reactstrap";
import Carousel from "../../components/Carousel";
import "./style.css";

const pictures = [
    new URL("http://www.theinclusionsolution.me/wp-content/uploads/2014/07/people-holding-up-letters-spelling-out-culture-620x330.jpg"),
    new URL("https://therumpus.net/wp-content/uploads/2017/12/Timeless_Books.jpg"),
    new URL("https://www.sossaferide.org/wp-content/uploads/2015/09/open-sign.jpg")
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
                            <Media src={pictures[1]} className="image" fluid />
                        </div>
                        <h1>Our History</h1>
                        <p className="discriptiion">
                            Quis Lorem et pariatur labore anim aute aute cillum sit. Laborum sint est Lorem eu reprehenderit anim cillum. Ad pariatur mollit in exercitation consectetur veniam laborum minim ad voluptate. Sit laboris dolor officia cillum consequat id. Aliquip enim do officia veniam do id occaecat qui Lorem labore deserunt ex dolore. Ex mollit eu eu excepteur officia enim excepteur aliquip magna irure non veniam excepteur.
                        </p>
                    </Container>
                </Card>
                <Card fluid className="tranparentbox">
                    <Container>
                        <div className="image-box">
                            <Media src={pictures[0]} className="image" fluid />
                        </div>
                        <h1>Our Culture</h1>
                        <p className="discriptiion">
                            Officia exercitation proident exercitation ex exercitation ipsum tempor fugiat elit culpa adipisicing. Nulla deserunt anim do excepteur nulla. Et sunt enim voluptate non officia dolore velit sunt adipisicing reprehenderit enim consequat sint et. Do proident dolor exercitation veniam sint ex anim culpa.
                        </p>
                    </Container>
                </Card>
                <Card fluid className="tranparentbox">
                    <Container>
                        <div className="image-box">
                            <Media src={pictures[2]} className="image" fluid />
                        </div>
                        <h1>Hours:</h1>
                        <p className="discriptiion">
                            Mon-Fri: 12:00 PM - 12:00 AM
                            Sat-Sun: 10:00 AM - 2:00 AM
                        </p>
                        <h1>Location:</h1>
                        <p className="discriptiion">
                            1705 N Maple Street, Springfield AZ
                        </p>
                    </Container>
                </Card>
            </>
        )
    }
}

export default VisitorHome;