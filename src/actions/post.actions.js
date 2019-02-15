import * as http from '../api/http'
import { receiveCategories, selectedCategoryChange } from './category.actions'
import { setComments } from './commet.actions'
import { navItemChange } from './navbar.actions'
import * as util from '../util'

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const SELECT_POST = 'SELECT_POST'
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const VOTE_SCORE_CHANGE = 'VOTE_SCORE_CHANGE'
export const SORTED_BY_CHANGE = 'SORTED_BY_CHANGE'

export function fetchAllPosts() {
    return async (dispatch, getState) => {
        try {
            const [responsePosts, responseCategories] = await Promise.all([
                http.getAllPosts(),
                http.getAllCategories()
            ])

            const posts = responsePosts.data
            const categories = responseCategories.data.categories
            const { post: { sortedBy } } = getState()

            dispatch(receiveAllPosts(util.sortedBy(sortedBy, posts)))
            dispatch(receiveCategories(categories))
            dispatch(selectedCategoryChange('all'))
            dispatch(navItemChange('Home'))

        } catch (error) {
            console.log('error =>', error)
        }
    }
}
export function fetchPostsByCategory(category) {
    return async (dispatch, getState) => {
        try {
            const { category: { categories }, post: { sortedBy } } = getState()
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
            dispatch(receiveAllPosts(util.sortedBy(sortedBy, posts)))
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
            await http.addNewPost(post)
            dispatch(navItemChange('Home'))
        } catch (error) {
            console.log('error =>', error)
        }
    }
}
export function editPost(post) {
    return async dispatch => {
        try {
            await http.editPost(post)
            dispatch(navItemChange('Home'))
        } catch (error) {
            console.log('error =>', error)
        }
    }
}
export function goToNewPostForm() {
    return async (dispatch, getState) => {
        try {
            const { category: { categories } } = getState()
            if (categories.length === 0) {
                const response = await http.getAllCategories()
                const categoriesList = response.data.categories
                dispatch(receiveCategories(categoriesList))
            }
        } catch (error) {
            console.log('error =>', error)
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
export function sortPostBy(type) {
    return { type: SORTED_BY_CHANGE, sortedBy: type }
}