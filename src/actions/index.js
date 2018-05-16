export const SET_USER = 'set_user';
export const SET_FOLLOWERS = 'set_followers';
export const SET_REPOS = 'set_repos';

export async function set_user(user){
    return ({
        type: SET_USER,
        user
    });
}
export async function set_followers(followers){
    return ({
        type: SET_FOLLOWERS,
        followers
    });
}
export async function set_repos(repos){
    return ({
        type: SET_REPOS,
        repos
    });
}