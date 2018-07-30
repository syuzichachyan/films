import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Routers from './routes'
import rootReducer from "./reducers"

let currentUser, popularFilms,
    filmDetail, genres, favouriteFilms, multiSearch, myFavourites, isFetching, popularFilmsIsFetching, genresIsFetching,
    filmDetailIsFetching,multiSearchIsFetching,searchText;
try {
    currentUser = JSON.parse(localStorage.getItem('user'));
    popularFilms = JSON.parse(localStorage.getItem('films'));
    filmDetail=JSON.parse(localStorage.getItem('filmDetail'));
    genres=JSON.parse(localStorage.getItem('genres'));
    favouriteFilms=JSON.parse(localStorage.getItem('favouriteFilms'))|| [];
    multiSearch=JSON.parse(localStorage.getItem('multiSearch'));
    myFavourites=JSON.parse(localStorage.getItem('myFavourites'));
    popularFilmsIsFetching=JSON.parse(localStorage.getItem('popularFilmsIsFetching'));
    genresIsFetching=JSON.parse(localStorage.getItem('genresIsFetching'));
    filmDetailIsFetching = JSON.parse(localStorage.getItem('filmDetailIsFetching'));
    multiSearchIsFetching = JSON.parse(localStorage.getItem('multiSearchIsFetching'));
    searchText = JSON.parse(localStorage.getItem('searchText'));
} catch (e) {
    currentUser = null;
    popularFilms = null;
    filmDetail=null;
    genres=null;
    favouriteFilms=null;
    multiSearch=null;
    myFavourites=null;
    popularFilmsIsFetching=false;
    genresIsFetching=false;
    filmDetailIsFetching = false;
    multiSearchIsFetching=false;
    searchText="";

}
const store = createStore(rootReducer, {
    currentUser,
    popularFilms,
    filmDetail,
    genres,
    favouriteFilms,
    multiSearch,
    myFavourites,
    popularFilmsIsFetching,
    genresIsFetching,
    filmDetailIsFetching,
    multiSearchIsFetching,
    searchText
}, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <Routers/>
    </Provider>,
    document.getElementById('root'));
