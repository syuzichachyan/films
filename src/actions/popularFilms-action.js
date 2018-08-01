import {
    FILMS_DETAIL_FETCHING,
    FILMS_DETAIL_FETCHING_FAILURE,
    FILMS_DETAIL_FETCHING_SUCCESS,
    FILMS_FETCHING,
    FILMS_FETCHING_FAILURE,
    FILMS_FETCHING_SUCCESS,
    GENRES_DETAIL,
    GENRES_DETAIL_FETCHING_FAILURE,
    GENRES_DETAIL_FETCHING_SUCCESS
} from '../constants/actions'

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


export const genres = () => (dispatch, getState) => {
    const apiKey = getState().currentUser.apiKey;

    dispatch({type: GENRES_DETAIL});
    return (fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey.trim()}&language=en-US`).then(genres => genres.json()).then(genres => genres.genres).then(genres => {
        localStorage.setItem("genres", JSON.stringify(genres));
        return dispatch(genresFetchingSuccess(genres))
    }).catch(error => {
        console.log(error);
        dispatch(genresFetchingFailure())
    }))
};

export const filmsWithPage = (page = 1) => (dispatch, getState) => {
    const apiKey = getState().currentUser.apiKey;
    dispatch({type: FILMS_FETCHING});
    return (fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey.trim()}&language=en-US&page=${page}`).then(films => films.json()).then(films => {
        localStorage.setItem("films", JSON.stringify(films));
        dispatch(popularFilmsFetchingSuccess(films))
    }).catch(error => {
        console.log(error);
        dispatch(popularFilmsFetchingFailure())
    }))
};
export const filmDetail = (id) => (dispatch, getState) => {
    const apiKey = getState().currentUser.apiKey;

    dispatch({type: FILMS_DETAIL_FETCHING});
    return (fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey.trim()}&language=en-US`).then(film => film.json()).then(film => {
        localStorage.setItem("filmDetail", JSON.stringify(film));
        dispatch(filmDetailFetchingSuccess(film))
    }).catch(error => {
        console.log(error);
        dispatch(filmDetailFetchingFailure())
    }))
};
