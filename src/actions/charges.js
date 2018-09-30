import axios from "axios";

import { ACTIONS_TYPES, API_URL, AUTH_TOKEN } from "../constants";

const launchCharge = () => ({ type: ACTIONS_TYPES.CHARGE_LAUNCH });
const successCharge = (charge) => ({ type: ACTIONS_TYPES.CHARGE_SUCCESS, charge });
const errorCharge = (err) => ({ type: ACTIONS_TYPES.CHARGE_ERROR, err });

export const charge = (stripeToken, offerId, callback) => (dispatch) => {
    dispatch(launchCharge());

    axios.post(`${API_URL}/charges`, { stripeToken, offerId }).then(response => {
        dispatch({ type: ACTIONS_TYPES.OFFER_UPDATE_COUNT });
        dispatch(successCharge(response.data));

        if (!!callback) callback();
    }).catch(err => {
        dispatch(errorCharge(err));
    });
};