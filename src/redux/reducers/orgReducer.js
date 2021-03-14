import * as constants from '../constants'

export default function orgReducer(state = [], action) {
    switch (action.type) {
        case constants.SET_ALL_ORGS:
            return action.payload;
        case constants.ADD_ORG:
            return state.concat(action.payload);
        case constants.REMOVE_ORG:
            return state.filter(item => item._id !== action.payload);
        case constants.UPDATE_ORG:
            return state.map(item => {
                if (item.__id === action.payload.OrgId)
                    return {...item, ...action.payload.data}
                else
                    return item
            });
        case constants.RESET_USER_INFO:
            return [];
        default:
            return state;
    }
}