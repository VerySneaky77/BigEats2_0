import React, { Component } from "react";
import { Card, Container, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./style.css";

class NewVisitorWindow extends Component {

    render() {
        return (
            <Card className="window-card">
                <Container>
                    <Form>
                        <h2>New Registration</h2>
                        <FormGroup>
                            <Label for="name">Name for Orders</Label>
                            <Input type="textarea" name="name" id="name" placeholder="Enter Your Name" />
                            <FormText color="muted">Must be one name. White space will be ignored.</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone Number</Label>
                            <Input type="textarea" name="phone" id="phone" placeholder="Enter Your Phone Number" />
                            <FormText color="muted">Only enter numeric characters.</FormText>
                        </FormGroup>
                        <Button>Register</Button>
                    </Form>
                </Container>
            </Card>
        );
    }
}

export default NewVisitorWindow;