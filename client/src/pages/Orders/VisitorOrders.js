import React, { Component } from "react";
import VisitorWindow from "../../components/VisitorWindow";
import InfoWindow from "../../components/InfoWindow";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import OrderRoute from "../../utils/OrderRoute";
import VisitorRoute from "../../utils/VisitorRoute";
import "./style.css";

class VisitorOrders extends Component {
    state = {
        items: [],
        tempOrder: [],
        orderItem: {}
    };

    componentDidMount() {
        console.log(this.props.phone);
        console.log(this.props.name);
    }

    // Populate the Orders section of the visitor-side site
    loadOrders = () => {
        OrderRoute.getOrdersByPhone(this.props.phone)
            .then(res => {
                this.setState({ tempOrder: res.data });
                this.props.updateOrder(this.state.tempOrder);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <Container>
                    <h1 className="order-title">Your BIG Order</h1>
                </Container>
                {this.props.phone === 0 ? (
                    <Container>
                        <VisitorWindow.SignIn />
                        <VisitorWindow.SignNew />
                    </Container>
                ) : (
                        <Container>
                            <InfoWindow
                                name={this.props.name}
                                phone={this.props.phone}
                            />
                        </Container>
                    )
                }
            </>
        )
    }
}

export default VisitorOrders;