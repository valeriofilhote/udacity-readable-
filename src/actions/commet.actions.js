export const SELECT_COMMENT = 'SELECT_COMMENT'
export const SET_COMMENTS = 'SET_COMMENTS'


export function setComments(comments) {
    return { type: SET_COMMENTS, comments }
}
