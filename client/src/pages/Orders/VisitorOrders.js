import React, { Component } from "react";
import VisitorWindow from "../../components/VisitorWindow/";
import InfoWindow from "../../components/InfoWindow";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import OrderRoute from "../../utils/OrderRoute";
import VisitorRoute from "../../utils/VisitorRoute";
import "./visitor.css";

class VisitorOrders extends Component {
    state = {
        items: [],
        tempOrder: [],
        orderItem: {}
    };

    componentDidMount() {
    }

    // Populate the Orders section of the visitor-side site
    loadOrders = () => {
        OrderRoute.getOrders(this.state._id)
            .then(res => {
                this.setState({ tempOrder: res.data });
                this.props.updateOrder(this.state.tempOrder);
            })
            .catch(err => console.log(err));
    };

    // User sign in

    // User sign new


    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Your BIG Order</h1>
                </Jumbotron>
                {this.props.phone !== "" ? (
                    <Container>
                        <InfoWindow
                            name={this.props.name}
                            phone={this.props.phone}
                        />
                    </Container>
                ) : (
                        <Container>
                            <VisitorWindow.SignIn />
                            <VisitorWindow.SignNew />
                        </Container>
                    )
                }
            </>
        )
    }
}

export default VisitorOrders;