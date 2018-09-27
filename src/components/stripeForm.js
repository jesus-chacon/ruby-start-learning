import React, { Component } from "react";
import { CardElement, injectStripe, Elements, StripeProvider } from "react-stripe-elements";

// Props tokenCallback, amount

class stripeElemments extends Component {
    constructor() {
        super();

        this.state = {
            name: ""
        };
    }

    render() {
        return (
            <div className="checkout">
                <p>Would you like to complete the purchase?</p>

                <div className="form-group">
                    <label>Name of the owner</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={e => this.setState({ email: e.target.value })} />
                </div>

                <div className="form-group">
                    <label>Billing info</label>
                    <CardElement />
                </div>

                <button className="btn btn-primary" onClick={this._submit.bind(this)}>Send</button>
            </div>
        );
    }

    async _submit() {
        console.log(this.props.stripe);
        let { token } = await this.props.stripe.createToken({ name: this.state.name });

        console.log("Token generated", token);
    }
}

const Form = injectStripe(stripeElemments);

class StripeForm extends Component {
    render() {
        return (
            <StripeProvider apiKey="pk_test_ElsKNSDhhXfZEFsaTacCHUse">
                <Elements>
                    <Form />
                </Elements>
            </StripeProvider>
        );
    }
}

export default StripeForm;