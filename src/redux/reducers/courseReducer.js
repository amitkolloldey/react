import * as constants from '../constants'

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case constants.SET_ALL_COURSES:
            return action.payload;
        case constants.RESET_USER_INFO:
            return [];
        default:
            return state;
    }
}