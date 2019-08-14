import React, { Component } from "react";
import { Jumbotron, ListGroup, ListGroupItem, Container, Button } from "reactstrap";
import "./style.css"

class VisitorMenu extends Component {
    state = {
        allTypes: ["Sandwich", "Platter", "Pizza"],
        name: "",
        ingredients: "",
        description: "",
        price: "",
        type: "",
        itemRow: []
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
                <Container>
                    <h1 className="menu-title">The BIG Menu</h1>
                </Container>
                {this.props.items.length ? (
                    <Container>
                        {this.state.allTypes.map(types => (
                            <ListGroup>
                                <h2 className="menu-group-header">{types}</h2>
                                {this.props.items.map(item => (
                                    types === item.categories ? (
                                        <ListGroupItem key={item._id}>
                                            <h3 className="item-head">{item.name}</h3>
                                            <p className="item-ingredients">{item.ingredients}</p>
                                            <p className="item-description">{item.description}</p>
                                        </ListGroupItem>
                                    ) : null
                                ))}
                            </ListGroup>
                        ))}
                    </Container>
                ) : (
                        <h3>Our menu is currently unavailable for viewing.</h3>
                    )}
            </>
        )
    }
}

export default VisitorMenu;