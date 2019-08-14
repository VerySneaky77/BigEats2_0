import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function NewVisitorWindow() {
    return (
        <Form>
            <h2>New Visitor</h2>
            <FormGroup>
                <Label for="name">Name for Orders</Label>
                <Input type="textarea" name="name" id="name" placeholder="Enter Your Name" />
                <FormText color="muted">Must be one name. White space will be ignored.</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input type="number" name="phone" id="phone" placeholder="Enter Your Phone Number" />
                <FormText color="muted">Only enter numeric characters.</FormText>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}

export default NewVisitorWindow;