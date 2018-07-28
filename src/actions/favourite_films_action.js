import {ADD_FAVOURITE_FILM, DELETE_FAVOURITE_FILM, FAVOURITE_FILMS} from '../constants/actions';
import {filmDetail} from "./popularFilms-action";

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

export const FavouriteFilms = (films) => {
    return {
        type: FAVOURITE_FILMS,
        payload: films
    }
};
export const addOrDelete = (filmId) => (dispatch, getState) => {
    const favouriteFilms = getState().favouriteFilms;
    const id=favouriteFilms.indexOf(filmId);
    if (favouriteFilms.indexOf(filmId)!==-1){
     const temp = [...favouriteFilms.splice(0, id - 1), ...favouriteFilms.splice(id + 1)];
            localStorage.setItem("favouriteFilms", JSON.stringify(temp));
        return dispatch(deleteFromFavouriteFilms(filmId));
     }
     else{
        localStorage.setItem("favouriteFilms",JSON.stringify([...favouriteFilms,filmId]));
       return dispatch(addToFavouriteFilms(filmId));
    }
};
