import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function ReturnVisitorWindow() {
    return (
        <Form>
            <h2>Sign In</h2>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="textarea" name="name" id="name" placeholder="Enter Your Name" />
                <FormText color="muted">Must be one name. White space will be ignored.</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input type="number" name="phone" id="phone" placeholder="Enter Your Phone Number" />
                <FormText color="muted">Only enter numeric characters.</FormText>
            </FormGroup>
            <Button>Sign In</Button>
        </Form>
    );
}

export default ReturnVisitorWindow;