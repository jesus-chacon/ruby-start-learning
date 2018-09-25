import { combineReducers } from "redux";

import offersReducers from "./offers";
import usersReducers from "./users";

const reducers = {
    offersReducers,
    usersReducers
};

export default combineReducers(reducers);