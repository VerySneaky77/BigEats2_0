import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Routes used to make orders
import VisitorRoute from "../../utils/VisitorRoute";
import OrderRoute from "../../utils/OrderRoute";
import MenuRoute from "../../utils/MenuRoute";
import Home from "../Home/VisitorHome";
import Orders from "../Orders/VisitorOrders";
import Menu from "../Menu/VisitorMenu";
import NoPath from "../NoPath";
import Nav from "../../components/NavSection/VisitorNav";
import Footer from "../../components/Footer";

class VisitorHub extends Component {
    // This state allows the site to keep temporary track of the user's ordered items
    state = {
        visitor: {
            name: "",
            phone: 0
        },
        orders: [],
        items: []
    };

    loadMenu = () => {
        MenuRoute.getMenu()
            .then(res => {
                this.setState({
                    items: res.data,
                })
            })
            .catch(err => console.log(err));
    };

    loadSignIn = (inName, inPhone) => {
        this.setState(this.state.visitor, { name: inName });
        this.setState(this.state.visitor, { phone: inPhone });
    };

    onSubmitNewVisitor = (inName, inPhone) => {
        this.loadSignIn(inName, inPhone);
        this.postVisitor();
    }

    onSignReturnVisitor = (inName, inPhone) => {
        this.loadSignIn(inName, inPhone);
        this.getVisitor();
    }

    getVisitor = () => {
        VisitorRoute.getVisitorInfoByPhone(this.state.visitor.phone)
            .then(res => {
                this.setState({ visitor: res.data });
            })
            .catch(err => console.log(err));
    };

    postVisitor = () => {
        let visitor = this.state.visitor;

        VisitorRoute.postVisitorInfo(visitor)
            .then(res => {
                console.log("Data uploaded");
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    addToOrder = (e, newItem) => {
        let tempArray = this.state.orders;

        tempArray.push(newItem);
        this.setState({ orders: tempArray });
    };

    sendOrder = () => {
        let total = 0;
        let orderItem = {};

        this.state.orders.forEach(item => {
            total += item.price;
        });

        orderItem = {
            items: this.state.orders,
            totalCost: total,
            owner: this.state.phone
        };

        OrderRoute.postOrders(orderItem)
            .then(res => {
                this.setState({ tempOrder: res.data });
                this.props.updateOrder(this.state.tempOrder);
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <>
                <Route component={Nav} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/orders" render={() =>
                        <Orders
                            name={this.state.visitor.name}
                            phone={this.state.visitor.phone}
                            orders={this.state.orders}
                            onSignReturnVisitor={this.onSignReturnVisitor}
                            onSubmitNewVisitor={this.onSubmitNewVisitor}
                        />
                    }
                    />
                    <Route exact path="/menu" render={() =>
                        <Menu
                            orders={this.state.orders}
                            addToOrder={this.addToOrder}
                            loadMenu={this.loadMenu}
                            items={this.state.items}
                        />
                    } />
                    <Route component={NoPath} />
                </Switch>
                <Route component={Footer.Visitor} />
            </>
        );
    }
}

export default VisitorHub;