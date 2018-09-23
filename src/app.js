import "babel-polyfill";

import React, { Fragment } from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import { store } from "./store";

import { AUTH_TOKEN } from "./constants";
import { fetchOffers } from "./actions/offers";

import "./scss/styles.scss";

// PAGES
import loginPage from "./pages/public/login";
import signupPage from "./pages/public/signup";
import mainPage from "./pages/private/main";

// COMPONENTS
import PrivateRoute from "./components/privateRoute";

store.dispatch(fetchOffers());

const App = () => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path="/login" component={loginPage} />
                    <Route exact path="/signup" component={signupPage} />
                    <Route exact path="/" component={mainPage} />
                </Switch>
            </Fragment>
        </Router>
    </Provider>
);

export default hot(module)(App);
