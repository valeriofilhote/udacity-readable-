import * as http from '../api/http'
import { showCommentModal } from '../actions/navbar.actions'
import { selectPost } from '../actions/post.actions'

export const SELECT_COMMENT = 'SELECT_COMMENT'
export const SET_COMMENTS = 'SET_COMMENTS'
export const COMMENT_VOTE_SCORE_CHANGE = 'COMMENT_VOTE_SCORE_CHANGE'

export function setComments(comments) {
    return { type: SET_COMMENTS, comments }
}
export function addComment(comment) {
    return async (dispatch, getState) => {
        try {
            const response = await http.addComment(comment)
            const savedComment = response.data
            const { comment: { comments }, post: { selectedPost } } = getState()
            // Update Comments
            comments.push(savedComment)
            dispatch(setComments(comments))
            // Update Selected Post
            selectedPost.commentCount++
            dispatch(selectPost({ ...selectedPost }))

            dispatch(showCommentModal(false))
        } catch (error) {
            console.log('error =>', error)
        }
    }
}
export function deleteComment(commentId) {
    return async (dispatch, getState) => {
        try {
            await http.deleteComment(commentId)
            const { comment: { comments }, post: { selectedPost } } = getState()
            // Update Comments
            const filteredComments = comments.filter(c => c.id !== commentId)
            dispatch(setComments(filteredComments))
            // Update Selected Post
            selectedPost.commentCount--
            dispatch(selectPost({ ...selectedPost }))
        } catch (error) {
            console.log('error =>', error)
        }
    }
}
export function vote(commentId, option) {
    // option: upVote or downVote
    return async dispatch => {
        try {
            const response = await http.voteOnComment(commentId, option)
            const changedComment = response.data
            dispatch({
                type: COMMENT_VOTE_SCORE_CHANGE,
                comment: changedComment
            })
        } catch (error) {
            console.log('error =>', error)

        }
    }
}
export function selectedComment(comment) {
    return { type: SELECT_COMMENT, comment }
}
export function editComment(comment) {
    return async (dispatch, getState) => {
        try {
            await http.editComment(comment)
            const { comment: { comments } } = getState()
            const index = comments.findIndex(c => c.id === comment.id)
            if (index !== -1) {
                comments[index] = comment
                dispatch(setComments([...comments]))
            }
        } catch (error) {
            console.log('error =>', error)
        }
    }
}