import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// Routes used to make orders
import Home from "../Home/AdminHome";
import Orders from "../Orders/AdminOrders";
import Menu from "../Menu/AdminMenu";
import NoPath from "../NoPath";
import Nav from "../../components/NavSection/AdminNav";
import Footer from "../../components/Footer"

class AdminHub extends Component {
    state = {}

    render() {
        return (
            <>
                <Route component={Nav} />
                <Switch>
                    <Route exact path="/admin" component={Home} />
                    <Route exact path="/admin/orders" component={Orders} />
                    <Route exact path="/admin/menu" component={Menu} />
                    <Route component={NoPath} />
                </Switch>
                <Route component={Footer.Admin} />
            </>
        );
    }
}

export default AdminHub;