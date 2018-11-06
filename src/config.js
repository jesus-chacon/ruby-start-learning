import "babel-polyfill";

import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import axios from "axios";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import "./scss/styles.scss";

import "jquery";
import "popper.js";
import "bootstrap";
import "mdbootstrap/js/mdb";

import { AUTH_TOKEN } from "./constants";

import { store } from "./store";

// PAGES
import loginPage from "./pages/public/login";
import signupPage from "./pages/public/signup";
import offersPage from "./pages/private/offers";
import offerViewPage from "./pages/private/offer";
import thanksPage from "./pages/private/thanks";
import logoutPage from "./pages/public/logout";

// COMPONENTS
import PrivateRoute from "./components/privateRoute";

import App from "./app";

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem(AUTH_TOKEN);

    if (!!token) {
        config.headers.common.Authorization = token;

        return config;
    } else {
        return config;
    }
});

const Config = () => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <Switch>
                    <App>
                        <Route exact path="/login" component={loginPage} />
                        <Route exact path="/" component={loginPage} />
                        <Route exact path="/signup" component={signupPage} />
                        <Route exact path="/logout" component={logoutPage} />
                        <PrivateRoute exact path="/offers" component={offersPage} />
                        <PrivateRoute exact path="/offers/:offerId" component={offerViewPage} />
                        <PrivateRoute exact path="/thanks" component={thanksPage} />
                    </App>
                </Switch>
            </Fragment>
        </Router>
    </Provider>
);

export default hot(module)(Config);