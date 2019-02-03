import * as http from '../api/http'
import { receiveCategories } from './category.actions'
import { setComments } from './commet.actions'

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const SELECT_POST = 'SELECT_POST'

export function fetchAllPosts() {
    return async dispatch => {
        try {
            const [responsePosts, responseCategories] = await Promise.all([
                http.getAllPosts(),
                http.getAllCategories()
            ])

            const posts = responsePosts.data
            const categories = responseCategories.data.categories

            dispatch(receiveAllPosts(posts))
            dispatch(receiveCategories(categories))

        } catch (error) {
            console.log('error =>', error)
        }
    }
}

export function receiveAllPosts(posts) {
    return { type: RECEIVE_ALL_POSTS, posts }
}
export function selectPost(post) {
    return { type: SELECT_POST, post }
}
export function getPostDetail(postId) {
    return async dispatch => {
        try {
            const [responsePostDetail, responseComments] = await Promise.all([
                http.getPostDetail(postId),
                http.getComments(postId)
            ])
            const detailedPost = responsePostDetail.data
            const comments = responseComments.data

            dispatch(selectPost(detailedPost))
            dispatch(setComments(comments))
        } catch (error) {
            console.log('error =>', error)
        }
    }
}