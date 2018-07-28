import {MULTI_SEARCH_FETCHING_FAILURE, MULTI_SEARCH_FETCHING_SUCCESS} from "../constants/actions";
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
export const multiSearch = (key,page) => (dispatch, getState) => {
    return(fetch(`https://api.themoviedb.org/3/search/multi?api_key=9f6ab5bfb7d10b1afe5d68bee350e4b6&language=en-US&query=${key}&page=${page}&include_adult=false`).then(films => films.json()).then(films => {
        localStorage.setItem("multiSearch",JSON.stringify(films));
        return dispatch(multiSearchFetchingSuccess(films))
    }).catch(error => {
        console.log(error);
        dispatch(multiSearchFetchingFailure())
    }))
};