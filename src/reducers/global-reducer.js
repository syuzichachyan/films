import {MULTI_SEARCH_FETCHING_FAILURE,MULTI_SEARCH_FETCHING_SUCCESS,GENRES_DETAIL_FETCHING_SUCCESS,GENRES_DETAIL_FETCHING_FAILURE,LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_SUCCESS,FILMS_FETCHING_SUCCESS,FILMS_FETCHING_FAILURE,LOGOUT_REQUEST_SUCCESS,FILMS_DETAIL_FETCHING_SUCCESS,FILMS_DETAIL_FETCHING_FAILURE,FAVOURITE_FILMS,ADD_FAVOURITE_FILM,DELETE_FAVOURITE_FILM} from '../constants/actions'

const initialState=null;

export const currentUser = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST_SUCCESS: {
            return action.payload

        }
        case LOGIN_REQUEST_FAILURE:
        case LOGOUT_REQUEST_SUCCESS:{
            return initialState;
        }
        default :
            return state;
    }
};
const initialStateForFilms=[];
export const popularFilms=(state=initialStateForFilms,action)=>{
    switch(action.type){
        case FILMS_FETCHING_SUCCESS:{
            return action.payload
        }
        case FILMS_FETCHING_FAILURE:{
            return initialState
        }
        default : return state;


    }
};
const initialStateForFilmDetail=[];
export const filmDetail=(state=initialStateForFilmDetail,action)=>{
    switch(action.type){
        case FILMS_DETAIL_FETCHING_SUCCESS:{
            return action.payload
        }
        case FILMS_DETAIL_FETCHING_FAILURE:{
            return initialStateForFilmDetail
        }
        default : return state;


    }
};
const initialStateForGenres=[];
export const genres=(state=initialStateForGenres,action)=>{
    switch(action.type){
        case GENRES_DETAIL_FETCHING_SUCCESS:{
            return action.payload
        }
        case GENRES_DETAIL_FETCHING_FAILURE :{
            return initialStateForGenres
        }
        default : return state;
    }
};
const initialStateForFavouriteFilms=[];
export const favouriteFilms=(state=initialStateForFavouriteFilms,action)=>{
    switch(action.type){
        case ADD_FAVOURITE_FILM:{
            return [...state,action.payload]
        }
        case DELETE_FAVOURITE_FILM:{
            return state.filter(el=>{ return  el!==action.payload})
        }
        case FAVOURITE_FILMS:{
            return state;
        }
        default : return state;
    }
};
const initialStateFoMultiSearch=[];
export const multiSearch=(state=initialStateFoMultiSearch,action)=>{
    switch(action.type){
        case MULTI_SEARCH_FETCHING_SUCCESS :{
            return action.payload
        }
        case MULTI_SEARCH_FETCHING_FAILURE:{
            return initialState;
        }
        default : return state;
    }
};