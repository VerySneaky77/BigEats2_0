import React, { Component } from "react";
import { Card, Container, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./style.css";

class ReturnVisitorWindow extends Component {

    render() {
        return (
            <Card className="window-card">
                <Container>
                    <Form>
                        <h2>Sign In</h2>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="textarea" name="name" id="name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone Number</Label>
                            <Input type="textarea" pattern="0-9" name="phone" id="phone" />
                        </FormGroup>
                        <Button onClick={this.props.onSignIn}>Sign In</Button>
                    </Form>
                </Container>
            </Card>
        );
    }
}

export default ReturnVisitorWindow;