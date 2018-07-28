import {createSelector} from 'reselect';

export const selectCurrentUser = state => state.currentUser;

export const selectIsAuthenticated = createSelector(selectCurrentUser,
    currentUser => currentUser !== null);

