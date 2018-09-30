import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchOffer } from "../../actions/offers";

import Loading from "../../components/loading";
import ModalPayment from "../../components/modalPayment";

class OfferPage extends Component {
    constructor() {
        super();

        this.state = {
            isOpenModal: false
        };
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
                            <p><strong>Unit availables:</strong> {offer.count}</p>
                            <p><strong>Time to take:</strong> {offer.timeAvailable}</p>
                        </div>
                    </div>
                </div>

                <div className="offer-view__footer">
                    <button className="btn btn-primary" onClick={this._openModal.bind(this)}>Pay</button>

                    <ModalPayment
                        isOpen={this.state.isOpenModal}
                        onRequestClose={this._onCloseModal.bind(this)}
                        paymentCallback={this._paymentCallback.bind(this)} />
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.getOffer(this.props.match.params.offerId);
    }

    _openModal() {
        this.setState({ isOpenModal: true });
    }

    _onCloseModal() {
        this.setState({ isOpenModal: false });
    }

    _paymentCallback() {
        this.props.history.push("/thanks");
    }
}

const mapStateToProps = ({ offersReducers }) => ({
    offerState: offersReducers.offerState
});

const mapDispatchToProps = (dispatch) => ({
    getOffer: bindActionCreators(fetchOffer, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);