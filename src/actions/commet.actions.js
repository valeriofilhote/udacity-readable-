import * as http from '../api/http'
import { showCommentModal } from '../actions/navbar.actions'
import { selectPost } from '../actions/post.actions'

export const SELECT_COMMENT = 'SELECT_COMMENT'
export const SET_COMMENTS = 'SET_COMMENTS'

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
