import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {
    currentUser,
    favouriteFilms,
    filmDetail,
    filmDetailIsFetching,
    genres,
    genresIsFetching,
    getMyFavourites,
    multiSearch,
    multiSearchIsFetching,
    myFavouritesIsFetching,
    popularFilms,
    popularFilmsIsFetching,
    searchText
} from './global-reducer';


export default combineReducers({
    form: formReducer,
    currentUser,
    popularFilms,
    filmDetail,
    genres,
    favouriteFilms,
    multiSearch,
    getMyFavourites,
    popularFilmsIsFetching,
    genresIsFetching,
    filmDetailIsFetching,
    multiSearchIsFetching,
    searchText,
    myFavouritesIsFetching
})
