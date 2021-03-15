import * as constants from '../constants'

export const fetchUserRequests = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: 'requests',
        data,
        success: (response) => ( setAllRequests(response.data)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

const setAllRequests = (data) => {
    return {
        type: constants.SET_ALL_REQUESTS,
        payload: data
    }
}

export const getRequestById = (reqId, onSuccess) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `requests/${reqId}`,
        postProcessSuccess: onSuccess
    }
});


