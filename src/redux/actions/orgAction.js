import * as constants from '../constants'

export const fetchAllOrgs = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: 'orgs',
        data,
        success: (response) => ( setAllOrgs(response.data)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

const setAllOrgs = (data) => {
    return {
        type: constants.SET_ALL_ORGS,
        payload: data
    }
}

export const getOrgById = (orgId, onSuccess) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `orgs/${orgId}`,
        postProcessSuccess: onSuccess
    }
});

export const trainerRequest = (data, onSuccess) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: `requests`,
        data,
        postProcessSuccess: onSuccess
    }
});

// export const updateOrgById = (orgId, data, onSuccess, onError) => ({
//     type: constants.API,
//     payload: {
//         method: 'PUT',
//         url: `orgs/${orgId}`,
//         data,
//         success: (orgId, data) => (updateOrg(orgId, data)),
//         postProcessSuccess: onSuccess,
//         postProcessError: onError
//     }
// });