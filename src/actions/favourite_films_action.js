import {
    ADD_FAVOURITE_FILM,
    DELETE_FAVOURITE_FILM,
    MY_FAVOURITES_FETCHING,
    MY_FAVOURITES_FETCHING_FAILURE,
    MY_FAVOURITES_FETCHING_SUCCESS
} from '../constants/actions';

export const addToFavouriteFilms = (filmId) => {
    return {
        type: ADD_FAVOURITE_FILM,
        payload: filmId
    }
};
export const deleteFromFavouriteFilms = (filmId) => {
    return {
        type: DELETE_FAVOURITE_FILM,
        payload: filmId
    }
};
export const myFavourites = (myFavourites) => {
    return {
        type: MY_FAVOURITES_FETCHING_SUCCESS,
        payload: myFavourites
    }
};
export const addOrDelete = (filmId) => (dispatch, getState) => {
    const favouriteFilms = getState().favouriteFilms;
    const id = favouriteFilms.indexOf(filmId);

    if (id !== -1) {
        const temp = [...favouriteFilms];
        temp.splice(id, 1);
        localStorage.setItem("favouriteFilms", JSON.stringify(temp));
        dispatch(deleteFromFavouriteFilms(filmId));

    }
    else {
        localStorage.setItem("favouriteFilms", JSON.stringify([...favouriteFilms, filmId]));
        return dispatch(addToFavouriteFilms(filmId));
    }
};
export const getMyFavourites = () => (dispatch, getState) => {
    const favouriteFilms = getState().favouriteFilms;
    const apiKey = getState().currentUser.apiKey;
    const arr = [];
    dispatch({type: MY_FAVOURITES_FETCHING});
    favouriteFilms.forEach(el => {
        fetch(`https://api.themoviedb.org/3/movie/${el}?api_key=${apiKey.trim()}&language=en-US`).then(film => film.json()).then(film => {
            arr.push(film)
            localStorage.setItem("myFavourites", JSON.stringify(arr));
            return dispatch(myFavourites(arr));
        }).catch(e => {
            console.log(e);
            return dispatch({type: MY_FAVOURITES_FETCHING_FAILURE});
        });

    })


};

