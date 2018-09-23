import React from "react";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "../reducers";

export const store = createStore(
    combineReducers({ state: reducers }),
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);