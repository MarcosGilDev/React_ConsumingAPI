import { SET_USER, SET_FOLLOWERS, SET_REPOS } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case SET_USER:
            const { user } = action;
            return {
                ...state,
                user,
            };
        case SET_FOLLOWERS:
            const { followers } = action;
            return {
                ...state,
                followers,
            };
        case SET_REPOS:
            const { repos } = action;
            return {
                ...state,
                repos,
            };
        default:
            return state;
    }
}
