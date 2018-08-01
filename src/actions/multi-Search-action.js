import {
    MULTI_SEARCH_FETCHING,
    MULTI_SEARCH_FETCHING_FAILURE,
    MULTI_SEARCH_FETCHING_SUCCESS,
    SEARCH_TEXT
} from "../constants/actions";

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

export function searchText(search) {
    return {
        type: SEARCH_TEXT,
        payload: search
    }
}

export const multiSearch = (key, page = 1) => (dispatch, getState) => {

    const apiKey = getState().currentUser.apiKey;
    console.log(apiKey);
    dispatch({type: MULTI_SEARCH_FETCHING});
    return (fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey.trim()}&language=en-US&query=${key}&page=${page}&include_adult=false`).then(films => films.json()).then(films => {
        localStorage.setItem("multiSearch", JSON.stringify(films));
        return dispatch(multiSearchFetchingSuccess(films))
    }).catch(error => {
        console.log(error);
        dispatch(multiSearchFetchingFailure())
    }))
};
