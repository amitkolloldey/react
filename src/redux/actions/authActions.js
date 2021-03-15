import * as constants from '../constants'

export const registerUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: 'auth/register',
        data,
        success: (response) => (accountCreated(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

export const loginUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: 'auth/login',
        data,
        success: (response) => (setUserInfo(response.data)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

export const otpUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: 'requests/process',
        data,
        success: (response) => (accountCreated(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

export const resetPass = (data, onSuccess, onError) => (
    {
        type: constants.API,
        payload: {
            method: 'POST',
            url: 'requests/process',
            data,
            success: (response) => (setUserInfo(response.data)),
            postProcessSuccess: onSuccess,
            postProcessError: onError
        }
    })

export const enterResetEmail = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: 'auth/forgot',
        data,
        success: (response) => (accountCreated(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})

export const logOut = (data, onSuccess, onError) => {
    localStorage.removeItem('CURRENT_USER');
    return {
        type: constants.RESET_USER_INFO
    }
}

const setUserInfo = (data) => {
    const userInfo = {
        userId: data.id,
        name: data.name,
        pic: data.pic,
        token: data.token,
        role: data.Roles[0].name,
        isloggedin: true,
        verifiedAt: data.verifiedAt,
        blocked: data.blocked,
        phone: data.phone,
        email: data.email,
        bio: data.bio,
        address: data.address
    }

    localStorage.setItem('CURRENT_USER', JSON.stringify(userInfo))

    return {
        type: constants.SET_USER_INFO,
        payload: userInfo
    }
}

const accountCreated = (data) => {
    const message = {
        success: 'Success!'
    }

    return {
        type: constants.ACCOUNT_CREATED,
        payload: message
    }
}

export const updateCurrentUser = (data, onSuccess, onError) => (
    {
        type: constants.API,
        payload: {
            method: 'PUT',
            url: `users/${data.userId}`,
            data,
            success: (response) => (setUserInfo(response.data)),
            postProcessSuccess: onSuccess,
            postProcessError: onError
        }
    });