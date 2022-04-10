import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// here you change everything specific
//change name of func
export async function getAllposts() {
    //chsnge url
    return api.get('/data/posts?sortBy=_createdOn%20desc');
}

//
export async function createPost(post) {
    return api.post('/data/posts', post);
}


export async function getPostId(id) {
    return api.get('/data/posts/' + id);
}

export async function deleteById(id) {
    return api.del('/data/posts/' + id);
}

export async function editPost(id, post) {
    return api.put('/data/posts/' + id, post);
}


export async function getMypost(userId) {
    return api.get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function donate(postId) {
    return api.post(`/data/donations`);
}

export async function getdonations(postId) {
    return api.get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);
}