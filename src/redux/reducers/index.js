
import user from "./authReducers";
import orgs from "./orgReducer";
import courses from "./courseReducer";
import requests from "./requestRequcer";
import loading from "./loadingReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    user,
    orgs,
    loading,
    requests,
    courses
})

export default rootReducer