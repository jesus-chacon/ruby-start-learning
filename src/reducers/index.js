import { ACTIONS_TYPES } from "../constants";

let defaultState = {
    offers: []
};

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.FETCH_OFFERS:
            return {
                ...state,
                offers: action.offers
            };
        default: return state;
    }
};

export default reducers;