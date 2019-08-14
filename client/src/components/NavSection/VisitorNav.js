import React, { Component } from "react";
import { Collapse, Nav, Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler } from "reactstrap"

class VisitorNav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar expand="md" dark className="nav-area">
                <NavbarBrand href="/">The BIG Eats Eatery</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav className="ml-auto nav-box" navbar>
                        <NavItem><NavLink href="/menu">Menu</NavLink></NavItem>
                        <NavItem><NavLink href="/orders">Order</NavLink></NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    };
}

export default VisitorNav;