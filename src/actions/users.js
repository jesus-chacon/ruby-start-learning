import axios from "axios";

import { ACTIONS_TYPES, API_URL, AUTH_TOKEN } from "../constants";

const launchSignup = () => ({ type: ACTIONS_TYPES.USER_SIGNUP_LAUNCH });
const successSignup = (userData) => ({ type: ACTIONS_TYPES.USER_SIGNUP_SUCCESS, userData });
const errorSignup = (err) => ({ type: ACTIONS_TYPES.USER_SIGNUP_ERROR, err });

const launchLogin = () => ({ type: ACTIONS_TYPES.USER_LOGIN_LAUNCH });
const successLogin = (userData) => ({ type: ACTIONS_TYPES.USER_LOGIN_SUCCESS, userData });
const errorLogin = (err) => ({ type: ACTIONS_TYPES.USER_LOGIN_ERROR, err });

export const login = (email, password, history = false) => (dispatch) => {
    dispatch(launchLogin());

    axios.post(`${API_URL}/auth/login`, { email, password }).then(response => {
        const userData = response.data;

        if (!!userData.token) {
            dispatch(successLogin(userData));

            localStorage.setItem(AUTH_TOKEN, userData.token);

            if (!!history) {
                history.push("/offers");
            }
        } else {
            dispatch(errorLogin("Error loading token in response"));
        }

    }).catch(err => {
        dispatch(errorLogin(err));
    });
};

export const signup = (userData, history = false) => (dispatch) => {
    dispatch(launchSignup());

    axios.post(`${API_URL}/auth/signup`, userData).then(response => {
        const userData = response.data;

        if (!!userData.token) {
            dispatch(successSignup(userData));

            localStorage.setItem(AUTH_TOKEN, userData.token);

            if (!!history) {
                history.push("/offers");
            }
        } else {
            dispatch(errorSignup("Error loading token in response"));
        }

    }).catch(err => {
        dispatch(errorSignup(err));
    });
};

export const checkLogin = (history = false) => (dispatch) => {
    const token = localStorage.getItem(AUTH_TOKEN);

    if (!!token) {
        dispatch(successLogin({ token }));

        if (!!history) {
            history.push("/offers");
        }
    }
};