import React from "react";
import { Jumbotron, NavbarBrand } from "reactstrap";
import { Container } from "../Grid";

export default function Footer() {
    return (
        <Jumbotron style={{ marginBottom: "0px", backgroundColor: "red", height: "75px" }}>
            <Container>
                <NavbarBrand style={{ color: "white", align: "center" }}>Created by Carlos and Alapan</NavbarBrand>
            </Container>
            <a class="atg2" href="/../Users/Bryce/code/projects/project3_bootcamp/client/src/components/pages/Home/AdminHome" target="_blank">github.com</a>
        </Jumbotron>
    );
}