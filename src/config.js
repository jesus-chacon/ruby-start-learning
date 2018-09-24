import "babel-polyfill";

import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import "./scss/styles.scss";


import { store } from "./store";

// PAGES
import loginPage from "./pages/public/login";
import signupPage from "./pages/public/signup";
import offersPage from "./pages/private/offers";
import offerViewPage from "./pages/private/offer";

// COMPONENTS
import PrivateRoute from "./components/privateRoute";

import App from "./app";

const Config = () => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <Switch>
                    <App>
                        <Route exact path="/login" component={loginPage} />
                        <Route exact path="/signup" component={signupPage} />
                        <Route exact path="/offers" component={offersPage} />
                        <Route exact path="/" component={offersPage} />
                        <Route exact path="/offers/:offerId" component={offerViewPage} />
                    </App>
                </Switch>
            </Fragment>
        </Router>
    </Provider>
);

export default hot(module)(Config);