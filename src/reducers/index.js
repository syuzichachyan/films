import {combineReducers} from 'redux'
import  {reducer as formReducer} from 'redux-form'
import {currentUser,popularFilms,filmDetail,genres,favouriteFilms,multiSearch} from './global-reducer';


export default combineReducers({
    form:formReducer,
    currentUser,
    popularFilms,
    filmDetail,
    genres,
    favouriteFilms,
    multiSearch
})
