import React from "react";
import { Jumbotron, NavbarBrand } from "reactstrap";
import { Container } from "../Grid";
import { Link } from "react-router-dom";
import "./style.css"

export default function Footer() {
    return (
        <Jumbotron style={{ marginBottom: "0px", backgroundColor: "red", height: "75px" }}>
            <div>
                <p style={{ color: "black", align: "center" }}>Created by Alapan Bhakat and Carlos Quinto</p>
                <a className="atg2" href="/../Users/Bryce/code/projects/project3_bootcamp/client/src/components/pages/Home/AdminHome" target="_blank">github.com</a>
            </div>
            <Link to="/admin">Admin Portal</Link>
        </Jumbotron>
    );
}
