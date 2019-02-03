import axios from 'axios'

const authHttp = axios.create({
    baseURL: 'http://localhost:3001',
    headers: { 'Authorization': 'some-token' }
});

// HTTP Method : GET
export function getAllCategories() {
    return authHttp.get('/categories')
}
export function getAllPostFromOneCategory(category) {
    return authHttp.get(`/${category}/posts`)
}
export function getAllPosts() {
    return authHttp.get('/posts')
}
export function getPostDetail(postId) {
    return authHttp.get(`/posts/${postId}`)
}
export function getComments(postId) {
    return authHttp.get(`/posts/${postId}/comments`)
}
export function getCommentDetail(commentId) {
    return authHttp.get(`/comments/${commentId}`)
}

// HTTP Method : POST
export function addNewPost(post) {
    return authHttp.post('/posts', post)
}
export function voteOnPost(postId, option) {
    return authHttp.post(`/posts/${postId}`, { option })
}
export function addComment(comment) {
    return authHttp.post('/comments', comment)
}
export function voteOnComment(commentId, option) {
    return authHttp.post(`/comments/${commentId}`, { option })
}

// HTTP Method : PUT
export function editPost(post) {
    const { id, title, body } = post
    return authHttp.put(`/posts/${id}`, { title, body })
}
export function editComment(comment) {
    const { id, timestamp, body } = comment
    return authHttp.put(`/comments/${id}`, { timestamp, body })
}

// HTTP Method : DELETE
export function deletePost(postId) {
    return authHttp.delete(`/posts/${postId}`)
}
export function deleteComment(commentId) {
    return authHttp.delete(`/comments/${commentId}`)
}