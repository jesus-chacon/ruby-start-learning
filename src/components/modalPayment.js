import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StripeForm from "./stripeForm";
import Modal from "react-bootstrap4-modal";

import Loading from "./loading";

import { charge } from "../actions/charges";

// Props paymentCallback, amount, isOpen, onRequestClose

class ModalPayment extends Component {
    constructor() {
        super();

        this.state = {
            isPaying: false
        };
    }

    render() {
        return (
            <Modal
                visible={this.props.isOpen}
                dialogClassName="modal-sm">

                <div className="modal-header">
                    <h5>Completar pago</h5>

                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.onRequestClose()}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                {
                    this.state.isPaying &&

                    <Loading />
                }

                {
                    !this.state.isPaying &&

                    (
                        <div className="modal-body">
                            <StripeForm
                                tokenCallback={this._tokenCallback.bind(this)} />
                        </div>
                    )
                }
            </Modal>
        );
    }

    _tokenCallback(token) {
        this.setState({ isPaying: true });

        this.props.doCharge(token, this.props.offerState.offer.id, this.props.paymentCallback);
    }
}

const mapStateToProps = ({ offersReducers }) => ({
    offerState: offersReducers.offerState
});

const mapDispatchToProps = (dispatch) => ({
    doCharge: bindActionCreators(charge, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalPayment);