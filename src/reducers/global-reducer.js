import {
    ADD_FAVOURITE_FILM,
    DELETE_FAVOURITE_FILM,
    FAVOURITE_FILMS,
    FILMS_DETAIL_FETCHING,
    FILMS_DETAIL_FETCHING_FAILURE,
    FILMS_DETAIL_FETCHING_SUCCESS,
    FILMS_FETCHING,
    FILMS_FETCHING_FAILURE,
    FILMS_FETCHING_SUCCESS,
    GENRES_DETAIL,
    GENRES_DETAIL_FETCHING_FAILURE,
    GENRES_DETAIL_FETCHING_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_REQUEST_FAILURE,
    LOGIN_REQUEST_SUCCESS,
    LOGOUT_REQUEST_SUCCESS,
    MULTI_SEARCH_FETCHING_FAILURE,
    MULTI_SEARCH_FETCHING_SUCCESS,
    MY_FAVOURITES_FETCHING_SUCCESS
} from '../constants/actions'

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
const initialStateForMultiSearch = [];
export const multiSearch = (state = initialStateForMultiSearch, action) => {
    switch(action.type){
        case MULTI_SEARCH_FETCHING_SUCCESS :{
            return action.payload
        }
        case MULTI_SEARCH_FETCHING_FAILURE:{
            return initialStateForMultiSearch;
        }
        default :
            return state;
    }
};
const initialStateForMyFavourites = [];
export const getMyFavourites = (state = initialStateForMyFavourites, action) => {
    switch (action.type) {
        case MY_FAVOURITES_FETCHING_SUCCESS : {
            return action.payload
        }
        case MULTI_SEARCH_FETCHING_FAILURE: {
            return initialStateForMyFavourites;
        }
        default : return state;
    }
};
const initialStateForPopularFilmsIsFetching = null;
export const popularFilmsIsFetching = (state = initialStateForPopularFilmsIsFetching, action) => {
    switch (action.type) {
        case FILMS_FETCHING:
        {return true}
        case FILMS_FETCHING_FAILURE:
        case FILMS_FETCHING_SUCCESS:
         {
            return false;
        }
        default :
            return state;
    }
};
const initialStateForGenresIsFetching = null;
export const genresIsFetching = (state = initialStateForGenresIsFetching, action) => {
    switch (action.type) {
        case GENRES_DETAIL:
        {return true}
        case GENRES_DETAIL_FETCHING_FAILURE:
        case GENRES_DETAIL_FETCHING_SUCCESS:
        {
            return false;
        }
        default :
            return state;
    }
};

const initialStateForFilmDetailIsFetching = null;
export const filmDetailIsFetching = (state = initialStateForFilmDetailIsFetching, action) => {
    switch (action.type) {
        case FILMS_DETAIL_FETCHING:
        {return true}
        case FILMS_DETAIL_FETCHING_FAILURE:
        case FILMS_DETAIL_FETCHING_SUCCESS:
        {
            return false;
        }
        default :
            return state;
    }
};