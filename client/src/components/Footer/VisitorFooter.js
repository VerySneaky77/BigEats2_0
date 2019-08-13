import React from "react";
import { Jumbotron, NavbarBrand } from "reactstrap";
import { Container } from "../Grid";
import { Link } from "react-router-dom";
import "./style.css"

export default function Footer() {
    return (
        <div id="footer">
            <Container>
                <p>Created by Alapan Bhakat and Carlos Quinto</p>
                <a className="atg2" href="https://github.com/VerySneaky77/BigEats2_0" target="_blank">github.com</a>
            </Container>
        </div>
    );
}
