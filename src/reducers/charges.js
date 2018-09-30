import { ACTIONS_TYPES } from "../constants";

let defaultState = {
    isLoading: false,
    hasError: false,
    hasSuccess: false,
    err: null
};

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.CHARGE_LAUNCH:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                hasSuccess: false,
                err: null
            };
        case ACTIONS_TYPES.CHARGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasSuccess: true,
                hasError: false,
                err: null
            };
        case ACTIONS_TYPES.CHARGE_ERROR:
            return {
                ...state,
                isLoading: false,
                hasSuccess: false,
                hasError: true,
                err: action.err
            };
        default: return state;
    }
};

export default reducers;