import {LOGOUT_REQUEST_SUCCESS} from '../constants/actions';

export function logoutSuccess() {
    return {
        type: LOGOUT_REQUEST_SUCCESS

    }
}

export const logout = () => (dispatch, getState) => {
    localStorage.clear();
    dispatch(logoutSuccess());

};