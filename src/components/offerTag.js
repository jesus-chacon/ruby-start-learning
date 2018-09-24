import React, { Component } from "react";
import { Link } from "react-router-dom";

import ShortText from "./shortText";

class OfferTag extends Component {
    render() {
        const offer = this.props.offer;

        return (
            <div className="offer-tag">
                <div className="offer-tag__header">
                    <img src={offer.imgUrl ? offer.imgUrl : "../../src/assets/food-images/burger.jpg"} alt="Food Image" />
                    <h3 className="title">{offer.title}</h3>
                </div>

                <div className="offer-tag__body">
                    <ShortText text={offer.description} limit={150} />
                </div>

                <div className="offer-tag__footer">
                    <Link className="btn btn-primary" to={`/offers/${offer.id}`}>
                        Buy
                    </Link>
                </div>
            </div>
        );
    }
}

export default OfferTag;