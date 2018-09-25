import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchOffer } from "../../actions/offers";

import Loading from "../../components/loading";

class Main extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        const offerState = this.props.offerState;

        if (offerState.isLoading) {
            return (<Loading />);
        }

        if (!offerState.isLoading && offerState.hasError) {
            return (<p>We have problems loading the offer, please come back in few minutes, sorry</p>);
        }

        if (!offerState.isLoading && !offerState.hasError && !offerState.offer) {
            return (<p>Offer not found</p>);
        }

        const offer = offerState.offer;

        return (
            <div className="container offer-view">
                <div className="offer-view__header">
                    <h1 className="text-underline">{offer.title}</h1>
                </div>

                <div className="offer-view__body">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
                            <img className="img-fluid rounded" src={!!offer.imgUrl ? offer.imgUrl : "../../../src/assets/food-images/burger.jpg"} alt="Food image" />
                        </div>

                        <div className="col">
                            <p>{offer.description}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <p><strong>Location:</strong> {offer.location}</p>
                            <p><strong>Price:</strong> {offer.price}€</p>
                            <p><strong>Unit availables:</strong> {offer.cant}</p>
                            <p><strong>Time to take:</strong> {offer.timeAvailable}</p>
                        </div>
                    </div>
                </div>

                <div className="offer-view__footer">
                    <button className="btn btn-primary">Pay</button>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.getOffer(this.props.match.params.offerId);
    }
}

const mapStateToProps = ({ offersReducers }) => ({
    offerState: offersReducers.offerState
});

const mapDispatchToProps = (dispatch) => ({
    getOffer: bindActionCreators(fetchOffer, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);