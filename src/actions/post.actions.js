import * as http from '../api/http'
import { receiveCategories, selectedCategoryChange } from './category.actions'
import { setComments } from './commet.actions'

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const SELECT_POST = 'SELECT_POST'
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const VOTE_SCORE_CHANGE = 'VOTE_SCORE_CHANGE'

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
            dispatch(selectedCategoryChange('all'))

        } catch (error) {
            console.log('error =>', error)
        }
    }
}
export function fetchPostsByCategory(category) {
    return async (dispatch, getState) => {
        try {
            const { category: { categories } } = getState()
            let posts;

            if (categories.length === 0) {
                const [responsePosts, responseCategories] = await Promise.all([
                    http.getAllPostFromOneCategory(category),
                    http.getAllCategories()
                ])
                posts = responsePosts.data
                const categories = responseCategories.data.categories
                dispatch(receiveCategories(categories))
            } else {
                const response = await http.getAllPostFromOneCategory(category)
                posts = response.data
            }
            dispatch(selectedCategoryChange(category))
            dispatch(receiveAllPosts(posts))
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
export function addNewPost(post) {
    return async dispatch => {
        try {
            const response = await http.addNewPost(post)
            const data = response.data
            console.log(' data =>', data)

        } catch (error) {

        }
    }
}
export function vote(postId, option) {
    // option: upVote or downVote
    return async dispatch => {
        try {
            const response = await http.voteOnPost(postId, option)
            const changedPost = response.data
            dispatch({
                type: VOTE_SCORE_CHANGE,
                post: changedPost
            })

        } catch (error) {

        }
    }
}