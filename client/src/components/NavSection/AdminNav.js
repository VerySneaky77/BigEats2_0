import React, { Component } from "react";
import { Nav, Navbar, NavLink, NavbarBrand, Button } from "reactstrap"

class AdminNav extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <NavbarBrand href="/admin">Home Control Panel</NavbarBrand>
                    <Nav className="mr-auto">
                        {/* <NavLink href="/revenue">Revenue Reports</NavLink> */}
                        {/*   <NavLink href="/orders/find">Orders</NavLink> */}
                    </Nav>
                </Navbar>
            </>
        );
    };
}

export default AdminNav;