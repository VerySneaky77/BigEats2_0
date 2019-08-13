import React, { Component } from "react";
import { Jumbotron, ListGroup, ListGroupItem, Container, Button } from "reactstrap";
import "./style.css"

class VisitorMenu extends Component {
    state = {
        allTypes: ["sandwich", "appetizer", "beverage", "platter"],
        name: "",
        ingredients: "",
        description: "",
        price: "",
        type: "",
        itemRow: [],
        tempOrders: this.props.orders
    };

    componentDidMount() {
        this.props.loadMenu();
        this.setState({
            name: "",
            ingredients: "",
            description: "",
            price: "",
            type: ""
        })
    }

    render() {
        return (
            <>
                <Jumbotron>
                    <h1>The BIG Menu</h1>
                </Jumbotron>
                {this.props.items.length ? (
                    <Container>
                        <ListGroup>
                            {this.props.items.map(item => (
                                <ListGroupItem key={item._id}>
                                    <h3 className="item-head">{item.name}</h3>
                                    <p className="item-ingredients">{item.ingredients}</p>
                                    <p className="item-description">{item.description}</p>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Container>
                ) : (
                        <h3>Our menu is currently unavailable for viewing.</h3>
                    )}
            </>
        )
    }
}

export default VisitorMenu;