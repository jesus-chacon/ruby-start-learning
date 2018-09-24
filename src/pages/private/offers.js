import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchOffers } from "../../actions/offers";

import Loading from "../../components/loading";
import OfferTag from "../../components/offerTag";

class Main extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        const offersState = this.props.offersState;

        if (offersState.isLoading) {
            return (<Loading />);
        }

        if (!offersState.isLoading && offersState.hasError) {
            return (<p>We have problems loading the offers, please come back in few minutes, sorry</p>);
        }

        if (!offersState.isLoading && !offersState.hasError && offersState.offers.length == 0) {
            return (<p>We not have offers to show</p>);
        }

        const offers = offersState.offers;

        return (
            <div className="container">
                <div className="row row-eq-height">
                    {
                        offers.map(offer => {
                            return (
                                <div key={offer.id} className="col-xs-12 col-sm-6 col-md-4 col-xl-3 offer-tag-wrapper">
                                    <OfferTag offer={offer} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.getAllOffers();
    }
}

const mapStateToProps = ({ state }) => ({
    offersState: state.offersState
});

const mapDispatchToProps = (dispatch) => ({
    getAllOffers: bindActionCreators(fetchOffers, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);