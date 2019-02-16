import { SET_COMMENTS, COMMENT_VOTE_SCORE_CHANGE, SELECT_COMMENT } from '../actions/commet.actions'

const initState = {
    selectedComment: null,
    comments: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case SET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        case COMMENT_VOTE_SCORE_CHANGE:
            const { comments } = state
            const { comment } = action
            const index = comments.findIndex(c => c.id === comment.id)
            if (index !== -1) {
                comments[index] = comment
                return {
                    ...state,
                    comments: [...comments]
                }
            } else {
                return state
            }
        case SELECT_COMMENT:
            return {
                ...state,
                selectedComment: action.comment
            }
        default:
            return state
    }
}