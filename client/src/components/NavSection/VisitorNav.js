import React, { Component } from "react";
import { Nav, Navbar, NavLink, NavbarBrand, Button } from "reactstrap"

class VisitorNav extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <NavbarBrand href="/">The BIG Eats Eatery</NavbarBrand>
                    <Nav className="mr-auto">
                        <NavLink href="/menu">Menu</NavLink>
                        {/* <NavLink href="/orders">Order</NavLink> */}
                    </Nav>
                </Navbar>
            </>
        );
    };
}

export default VisitorNav;