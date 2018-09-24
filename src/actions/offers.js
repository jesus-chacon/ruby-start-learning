import axios from "axios";

import { ACTIONS_TYPES, API_URL } from "../constants";

const successGetOffers = (offers) => ({
    type: ACTIONS_TYPES.OFFERS_FETCH_SUCCESS,
    offers
});

const errorGetOffers = (err) => ({
    type: ACTIONS_TYPES.OFFERS_FETCH_ERROR,
    err
});

const launchGetOffers = () => ({
    type: ACTIONS_TYPES.OFFERS_FETCH_LAUNCH
});

const successGetOffer = (offer) => ({
    type: ACTIONS_TYPES.OFFER_FETCH_SUCCESS,
    offer
});

const errorGetOffer = (err) => ({
    type: ACTIONS_TYPES.OFFER_FETCH_ERROR,
    err
});

const launchGetOffer = () => ({
    type: ACTIONS_TYPES.OFFER_FETCH_LAUNCH
});

export const fetchOffers = () => (dispatch) => {
    dispatch(launchGetOffers());

    return axios.get(`${API_URL}/offers`).then(response => {
        dispatch(successGetOffers(response.data));
    }).catch(error => {
        dispatch(errorGetOffers(error));
    });
};

export const fetchOffer = (id) => (dispatch) => {
    dispatch(launchGetOffer());

    return axios.get(`${API_URL}/offers/${id}`).then(response => {
        dispatch(successGetOffer(response.data));
    }).catch(error => {
        dispatch(errorGetOffer(error));
    });
};