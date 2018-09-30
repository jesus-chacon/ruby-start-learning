import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

class ThanksPage extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        const offer = this.props.offerState.offer;

        if (!offer || !!this.props.offerState.hasError) {
            return (
                <Redirect to={{
                    pathname: "/offers", state: { from: "thanks" }
                }} />
            );
        }

        if (!!offer) {
            return (
                <div className="container thanks-view box-shadow no-hover">
                    <div className="thanks-view__header">
                        <h1 className="text-center">¡¡Enhorabuena!!</h1>

                        <h2 className="text-center">Ya eres un #fuditer</h2>
                    </div>

                    <div className="thanks-view__body">
                        <p className="text-center">Tu pedido ha sido realizado correctamente, puedes ir a recoger tu plato (<strong>{offer.timeAvailable}</strong>) y disfrutar de la revolución fudit</p>
                    </div>

                    <div className="thanks-view__footer text-center">
                        <Link to="/offers" className="btn btn-primary">Volver a fudit</Link>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = ({ offersReducers }) => ({
    offerState: offersReducers.offerState
});

export default connect(mapStateToProps, null)(ThanksPage);