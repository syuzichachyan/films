import {combineReducers} from 'redux'
import  {reducer as formReducer} from 'redux-form'
import {searchText,multiSearchIsFetching,filmDetailIsFetching,genresIsFetching,popularFilmsIsFetching,currentUser,popularFilms,filmDetail,genres,favouriteFilms,multiSearch,getMyFavourites} from './global-reducer';


export default combineReducers({
    form:formReducer,
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
    searchText


})
