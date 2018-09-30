import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchOffers } from "../../actions/offers";

import Loading from "../../components/loading";
import OfferTag from "../../components/offerTag";

class OffersPage extends Component {
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
                <h3 className="text-center">Ofertas disponibles</h3>
                <p className="text-center">Riquisimos, sanos y muy variados. Elige el que más te guste y disfruta ayudando al planeta</p>

                <div className="row row-eq-height">
                    {
                        offers.map(offer => {
                            return (
                                <div key={offer.id} className="col-xs-12 col-md-4 col-xl-3 offer-tag-wrapper">
                                    <OfferTag offer={offer} history={this.props.history} />
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

const mapStateToProps = ({ offersReducers }) => ({
    offersState: offersReducers.offersState
});

const mapDispatchToProps = (dispatch) => ({
    getAllOffers: bindActionCreators(fetchOffers, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersPage);