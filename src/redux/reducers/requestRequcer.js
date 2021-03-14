import * as constants from '../constants'

export default function requestReducer(state = [], action) {
    switch (action.type) {
        case constants.SET_ALL_REQUESTS:
            return action.payload;
        case constants.RESET_USER_INFO:
            return [];
        default:
            return state;
    }
}