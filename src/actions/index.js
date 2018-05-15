export const FETCH_USER = 'set_user';
export const FETCH_FOLLOWERS = 'set_followers';
export const FETCH_REPOS = 'set_repos';

export async function set_user(user){
    return ({
        type: FETCH_USER,
        user
    });
}
export async function set_followers(followers){
    return ({
        type: FETCH_FOLLOWERS,
        followers
    });
}
export async function set_repos(repos){
    return ({
        type: FETCH_REPOS,
        repos
    });
}