import * as axios from 'axios'

import * as constants from './constants'
import {logOut} from "./actions/authActions";

export const authMiddleware = ({dispatch, getState}) => next => action => {

    if (action.type !== constants.API) return next(action);

    dispatch(
        {
            type: constants.TOGGLE_LOADER
        }
    )

    const AUTH_TOKEN = getState().user.token;
    if (AUTH_TOKEN)
        axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

    const BASE_URL = 'http://3.141.85.114:3000/';
    const {url, method, success, data, postProcessSuccess, postProcessError} = action.payload;
    axios({
        method,
        url: BASE_URL + url,
        data: data ? data : null
    }).then((response) => {

        console.log(response)
        dispatch(
            {
                type: constants.TOGGLE_LOADER
            }
        )
        if (success) dispatch(success(response))
        if (postProcessSuccess) setTimeout(() => postProcessSuccess(response), 1000)
    }).catch((err) => {

        dispatch(
            {
                type: constants.TOGGLE_LOADER
            }
        )
        if (err.response.data.message) {
            postProcessError(err.response.data.message)
        } else {
            if (err.response.data.errors.length > 0) {
                if (!err) console.warn(err.response.data.errors[0]);
                else {
                    if (err) {
                        if (postProcessError) postProcessError(err.response.data.errors[0].message);
                    }
                }
            } else {
                if (err.response && err.response.status === 403)
                    dispatch(logOut());
                else
                    postProcessError(err.response);
            }
        }
    })

}