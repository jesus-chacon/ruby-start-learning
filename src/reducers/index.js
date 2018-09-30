import { combineReducers } from "redux";

import offersReducers from "./offers";
import usersReducers from "./users";
import chargeReducers from "./charges";

const reducers = {
    offersReducers,
    usersReducers,
    chargeReducers
};

export default combineReducers(reducers);