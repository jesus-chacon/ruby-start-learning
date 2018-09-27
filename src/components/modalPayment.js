import React, { Component } from "react";
import StripeForm from "./stripeForm";
import Modal from "react-bootstrap4-modal";

// Props paymentCallback, amount, isOpen, onRequestClose

class ModalPayment extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <Modal
                visible={this.props.isOpen}
                dialogClassName="modal-sm">

                <div className="modal-header">
                    <h5 className="modal-title">React Stripe elements example</h5>
                </div>

                <div className="modal-body">
                    <StripeForm
                        tokenCallback={this._tokenCallback.bind(this)}
                        amount={this.props.amount} />
                </div>
            </Modal>
        );
    }

    _tokenCallback(token) {
        console.log("Token callback with token", token);
    }
}

export default ModalPayment;

/* 


*/