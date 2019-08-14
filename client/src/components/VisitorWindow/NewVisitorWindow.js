import React, { Component } from "react";
import { Card, Container, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./style.css";

class NewVisitorWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            phone: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleRegister = (e) => {
        this.props.onSubmitNewVisitor(this.state.name, this.state.phone);
    };

    onSignIn = (e) => {
        let name = e.name;
        let phone = e.phone;
    }

    render() {
        return (
            <Card className="window-card">
                <Container>
                    <Form>
                        <h2>New Registration</h2>
                        <FormGroup>
                            <Label for="name">Name for Orders</Label>
                            <Input type="textarea" name="name" id="name" placeholder="Enter Your Name" value={this.state.name} onChange={this.handleChange} />
                            <FormText color="muted">Must be one name. White space will be ignored.</FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone Number</Label>
                            <Input type="textarea" name="phone" id="phone" placeholder="Enter Your Phone Number" value={this.state.phone} onChange={this.handleChange} />
                            <FormText color="muted">Only enter numeric characters.</FormText>
                        </FormGroup>
                        <Button onClick={this.onRegister}>Register</Button>
                    </Form>
                </Container>
            </Card>
        );
    }
}

export default NewVisitorWindow;