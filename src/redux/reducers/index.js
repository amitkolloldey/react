
import user from "./authReducers";
import orgs from "./orgReducer";
import requests from "./requestRequcer";
import loading from "./loadingReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    user,
    orgs,
    loading,
    requests
})

export default rootReducer