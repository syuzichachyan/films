import React from 'react'
import {FILMS_FETCHING_FAILURE, FILMS_FETCHING_SUCCESS,FILMS_DETAIL_FETCHING_FAILURE,FILMS_DETAIL_FETCHING_SUCCESS,GENRES_DETAIL_FETCHING_FAILURE,GENRES_DETAIL_FETCHING_SUCCESS,MULTI_SEARCH_FETCHING_FAILURE,MULTI_SEARCH_FETCHING_SUCCESS} from '../constants/actions'

export function popularFilmsFetchingSuccess(films) {
    return {
        type: FILMS_FETCHING_SUCCESS,
        payload: films
    }
}
export function filmDetailFetchingSuccess(film) {
    return {
        type: FILMS_DETAIL_FETCHING_SUCCESS,
        payload: film
    }
}
export function genresFetchingSuccess(genres) {
    return {
        type: GENRES_DETAIL_FETCHING_SUCCESS,
        payload: genres
    }
}
export function popularFilmsFetchingFailure() {
    return {
        type: FILMS_FETCHING_FAILURE,
    }
}
export function filmDetailFetchingFailure() {
    return {
        type: FILMS_DETAIL_FETCHING_FAILURE,
    }
}
export function genresFetchingFailure(genres) {
    return {
        type: GENRES_DETAIL_FETCHING_FAILURE,
    }
}

export function multiSearchFetchingSuccess(films) {
    return {
        type: MULTI_SEARCH_FETCHING_SUCCESS,
        payload: films
    }
}
export function multiSearchFetchingFailure() {
    return {
        type: MULTI_SEARCH_FETCHING_FAILURE
    }
}

export const genres = () => (dispatch,getState ) => {
    const apiKey=getState().currentUser.apiKey;
    return(fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=9f6ab5bfb7d10b1afe5d68bee350e4b6&language=en-US`).then(genres => genres.json()).then(genres=>genres.genres).then(genres => {
        localStorage.setItem("genres",JSON.stringify(genres));
        return dispatch(genresFetchingSuccess(genres))
    }).catch(error => {
        console.log(error);
        dispatch(genresFetchingFailure())
    }))
};

export const filmsWithPage = (page=1) => (dispatch,getState) => {

    return(fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9f6ab5bfb7d10b1afe5d68bee350e4b6&language=en-US&page=${page}`).then(films => films.json()).then(films => {
        localStorage.setItem("films",JSON.stringify(films));
        return dispatch(popularFilmsFetchingSuccess(films))
    }).catch(error => {
        console.log(error);
        dispatch(popularFilmsFetchingFailure())
    }))
};
export const filmDetail = (id) => (dispatch, getState) => {
    return(fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9f6ab5bfb7d10b1afe5d68bee350e4b6&language=en-US`).then(film => film.json()).then(film => {
        localStorage.setItem("filmDetail",JSON.stringify(film));
        return dispatch(filmDetailFetchingSuccess(film))
    }).catch(error => {
        console.log(error);
        dispatch(filmDetailFetchingFailure())
    }))
};
