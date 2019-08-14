import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function InfoWindow(props) {
    return (
        <Card>
            <CardBody>
                <CardTitle>
                    <h2>Hello, <span id="name">{props.name}</span></h2>
                </CardTitle>
                <CardText color="muted">Phone Number: <span id="phone">{props.phone}</span></CardText>
            </CardBody>
        </Card>
    );
}

export default InfoWindow;