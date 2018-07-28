import React from 'react'
import   {LOGOUT_REQUEST_SUCCESS} from '../constants/actions';

export function logoutSuccess(){
    return {
        type:LOGOUT_REQUEST_SUCCESS

    }
}

export  const logout =()=>(dispatch,getState)=> {
    localStorage.removeItem("user");
    localStorage.removeItem("filmDetail");
    localStorage.removeItem("favouriteFilms");
    dispatch(logoutSuccess());

};