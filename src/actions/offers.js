import axios from "axios";

import { ACTIONS_TYPES, API_URL } from "../constants";

export const getOffers = (offers) => ({
    type: ACTIONS_TYPES.FETCH_OFFERS,
    offers
});

export const getOffer = (offer) => ({
    type: ACTIONS_TYPES.FETCH_OFFER,
    offer
});

export const fetchOffers = () => (dispatch) => {
    return axios.get(`${API_URL}/offers`).then(response => {
        dispatch(getOffers(response.data));
    }).catch(error => { throw (error); });
};

export const fetchOffer = (id) => (dispatch) => {
    return axios.get(`${API_URL}/offers/${id}`).then(response => {
        dispatch(fetchOffer(response.data));
    }).catch(err => { throw (err); });
};