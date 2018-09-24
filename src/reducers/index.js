import { ACTIONS_TYPES } from "../constants";

let defaultState = {
    offersState: {
        offers: [],
        isLoading: false,
        hasError: false,
        error: null
    },
    offerState: {
        offer: null,
        isLoading: false,
        hasError: false,
        error: null
    }
};

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.OFFERS_FETCH_LAUNCH:
            return {
                ...state,
                offersState: {
                    isLoading: true,
                    offers: [],
                    hasError: false,
                    error: null
                }
            };
        case ACTIONS_TYPES.OFFERS_FETCH_SUCCESS:
            return {
                ...state,
                offersState: {
                    isLoading: false,
                    offers: action.offers,
                    hasError: false,
                    error: null
                }
            };
        case ACTIONS_TYPES.OFFERS_FETCH_ERROR:
            return {
                ...state,
                offersState: {
                    isLoading: false,
                    offers: [],
                    hasError: true,
                    error: action.err
                }
            };
        case ACTIONS_TYPES.OFFER_FETCH_LAUNCH:
            return {
                ...state,
                offerState: {
                    isLoading: true,
                    offer: null,
                    hasError: false,
                    error: null
                }
            };
        case ACTIONS_TYPES.OFFER_FETCH_SUCCESS:
            return {
                ...state,
                offerState: {
                    isLoading: false,
                    offer: action.offer,
                    hasError: false,
                    error: null
                }
            };
        case ACTIONS_TYPES.OFFER_FETCH_ERROR:
            return {
                ...state,
                offerState: {
                    isLoading: false,
                    offer: null,
                    hasError: true,
                    error: action.err
                }
            };
        default: return state;
    }
};

export default reducers;