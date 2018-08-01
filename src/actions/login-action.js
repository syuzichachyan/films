import {LOGIN_REQUEST, LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_SUCCESS} from '../constants/actions';

export function loginSuccess(user) {
    return {
        type: LOGIN_REQUEST_SUCCESS,
        payload: user
    }
}


export const login = () => (dispatch, getState) => {
    dispatch({type: LOGIN_REQUEST});
    try {
        let currentUser = {
            email: getState().form.login.values.email,
            apiKey: getState().form.login.values.apiKey
        };
        localStorage.setItem("user", JSON.stringify(currentUser));
        dispatch(loginSuccess(currentUser));
    }
    catch (e) {
        dispatch({type: LOGIN_REQUEST_FAILURE});
    }

};