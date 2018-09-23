import React, { Component } from "react";
import { connect } from "react-redux";

class Main extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        console.log(this.props.offers);

        if (!this.props.offers || this.props.offers.length == 0) {
            return (<p>We not have offers to show</p>);
        }

        const offers = this.props.offers;

        return (
            <ul>
                {
                    offers.map(offer => (
                        <li key={offer.id}>{offer.id} {offer.title}</li>
                    ))
                }
            </ul>
        );
    }
}

const mapStateToProps = ({ state }) => {
    return {
        offers: state.offers
    };
};

export default connect(mapStateToProps, null)(Main);