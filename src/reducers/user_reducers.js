import { FETCH_USER, FETCH_FOLLOWERS, FETCH_REPOS } from '../actions';

export default function (state = {}, action) {
    
    debugger;
    switch (action.type) {
        case FETCH_USER:
            const { user } = action;
            return {
                ...state,
                user,
            };
        case FETCH_FOLLOWERS:
            const { followers } = action;
            return {
                ...state,
                followers,
            };
        case FETCH_REPOS:
            const { repos } = action;
            return {
                ...state,
                repos,
            };
        default:
            return state;
    }
}
