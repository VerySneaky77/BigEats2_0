import React from "react";
import { Card, Container, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./style.css";

export default function ReturnVisitorWindow() {
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
                    <Button>Sign In</Button>
                </Form>
            </Container>
        </Card>
    );
}