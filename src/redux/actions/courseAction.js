import * as constants from '../constants'

export const fetchAllCourses = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: 'courses',
        data,
        success: (response) => ( setAllCourses(response.data)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

const setAllCourses = (data) => {
    return {
        type: constants.SET_ALL_COURSES,
        payload: data
    }
}

export const getCourseById = (courseId, onSuccess) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `courses/${courseId}`,
        postProcessSuccess: onSuccess
    }
});

export const traineeRequest = (data, onSuccess) => (
    {
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