import React, { Component } from "react";
import { CardElement, injectStripe, Elements, StripeProvider } from "react-stripe-elements";

// Props tokenCallback, amount

class stripeElemments extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            hasError: false
        };
    }

    render() {
        return (
            <form className="checkout" onSubmit={this._submit.bind(this)}>
                <div className="form-group">
                    <label>Tarjeta de cr&eacute;dito</label>
                    <CardElement />
                </div>

                {
                    !!this.state.hasError &&
                    (<p className="text-danger">Los datos introducidos son erroneos</p>)
                }

                <button className="btn btn-primary btn-sm btn-block">Pagar</button>
            </form>
        );
    }

    async _submit(ev) {
        ev.preventDefault();

        let response;

        try {
            response = await this.props.stripe.createToken({ name: this.state.name });
        } catch (e) {
            response = {};
        }

        const { token } = response;

        if (!token) {
            this.setState({ hasError: true });
        } else {
            this.props.tokenCallback(token.id);
        }
    }
}

const Form = injectStripe(stripeElemments);

class StripeForm extends Component {
    render() {
        return (
            <StripeProvider apiKey="pk_test_ElsKNSDhhXfZEFsaTacCHUse">
                <Elements>
                    <Form tokenCallback={this.props.tokenCallback} />
                </Elements>
            </StripeProvider>
        );
    }
}

export default StripeForm;