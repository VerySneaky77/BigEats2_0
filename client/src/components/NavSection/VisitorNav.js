import React, { Component } from "react";
import { Collapse, Nav, Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler } from "reactstrap"

class VisitorNav extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: false
        }
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <Navbar color="dark" expand="md" dark className="nav-area">
                <NavbarBrand href="/">The BIG Eats Eatery</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} />
                <Collapse isOpen={this.state.collapsed} navbar>
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