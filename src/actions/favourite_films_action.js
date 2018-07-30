import {ADD_FAVOURITE_FILM, DELETE_FAVOURITE_FILM, FAVOURITE_FILMS,MY_FAVOURITES_FETCHING_FAILURE,MY_FAVOURITES_FETCHING_SUCCESS} from '../constants/actions';
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
export const myFavourites = (myFavourites) => {
    return {
        type: MY_FAVOURITES_FETCHING_SUCCESS,
        payload: myFavourites
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
 export const getMyFavourites=()=>(dispatch,getState)=>{
     const favouriteFilms = getState().favouriteFilms;
     const apiKey=getState().currentUser.apiKey;
     const arr=[];
     favouriteFilms.forEach(el=>{
         fetch(`https://api.themoviedb.org/3/movie/${el.id}?api_key=9f6ab5bfb7d10b1afe5d68bee350e4b6&language=en-US`).then(film => film.json()).then(film=>{arr.push(film)
             dispatch(myFavourites(arr));
             localStorage.setItem("myFavourites",JSON.stringify(arr));

         }).catch(e=>{
             console.log(e);
             dispatch({type:MY_FAVOURITES_FETCHING_FAILURE});
         });

     })
};

