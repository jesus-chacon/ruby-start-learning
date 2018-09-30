import React, { Component } from "react";
import { Link } from "react-router-dom";

import ShortText from "./shortText";
import FoodImage from "./foodImage";

class OfferTag extends Component {
    render() {
        const offer = this.props.offer;

        return (
            <div onClick={() => this._goToOffer(offer.id)}>
                <div className="offer-tag d-none d-md-block box-shadow">
                    <div className="offer-tag__header">
                        <FoodImage imgUrl={offer.imgUrl} />

                        <h3 className="title">{offer.title}</h3>
                    </div>

                    <div className="offer-tag__body">
                        <p className="description">
                            <small><ShortText text={offer.description} limit={150} /></small>
                        </p>

                        <h4 className="price">
                            <span className="float-left">{offer.price} €</span>
                            <small className="time-available float-right">({offer.timeAvailable})</small>
                        </h4>
                    </div>

                    <div className="offer-tag__footer">
                        <button className="btn btn-primary" to={`/offers/${offer.id}`}>
                            Ver
                        </button>
                    </div>
                </div>

                <div className="offer-tag media d-md-none box-shadow">
                    <FoodImage className="d-flex mr-3" imgUrl={offer.imgUrl} />

                    <div className="media-body">
                        <h5 className="mt-0 font-weight-bold">
                            {offer.title}
                        </h5>

                        <p className="description">
                            <small><ShortText text={offer.description} limit={150} /></small>
                        </p>

                        <h5 className="price">
                            <span className="float-left">{offer.price} €</span>
                            <small className="time-available float-right">({offer.timeAvailable})</small>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }

    _goToOffer(id) {
        this.props.history.push(`/offers/${id}`);
    }
}

export default (OfferTag);