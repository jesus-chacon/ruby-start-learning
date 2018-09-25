import { ACTIONS_TYPES } from "../constants";

let defaultState = {
    signupState: {
        isLoading: false,
        hasError: false,
        err: null
    },
    loginState: {
        isLoading: false,
        hasError: false,
        err: null
    },
    userState: {
        token: "",
        isLoged: false
    }
};

const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.USER_SIGNUP_LAUNCH:
            return {
                ...state,
                signupState: {
                    isLoading: true,
                    hasError: false,
                    err: null
                },
                userState: {
                    isLoged: false,
                    token: ""
                }
            };
        case ACTIONS_TYPES.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                signupState: {
                    isLoading: false,
                    hasError: false,
                    err: null
                },
                userState: {
                    token: action.token,
                    isLoged: true
                }
            };
        case ACTIONS_TYPES.USER_SIGNUP_ERROR:
            return {
                ...state,
                signupState: {
                    isLoading: false,
                    hasError: true,
                    err: action.err
                },
                userState: {
                    isLoged: false,
                    token: ""
                }
            };
        case ACTIONS_TYPES.USER_LOGIN_LAUNCH:
            return {
                ...state,
                loginState: {
                    isLoading: true,
                    hasError: false,
                    err: null
                },
                userState: {
                    isLoged: false,
                    token: ""
                }
            };
        case ACTIONS_TYPES.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loginState: {
                    isLoading: false,
                    hasError: false,
                    err: null
                },
                userState: {
                    token: action.token,
                    isLoged: true
                }
            };
        case ACTIONS_TYPES.USER_LOGIN_ERROR:
            return {
                ...state,
                loginState: {
                    isLoading: false,
                    hasError: true,
                    err: action.err
                },
                userState: {
                    isLoged: false,
                    token: ""
                }
            };
        default: return state;
    }
};

export default reducers;