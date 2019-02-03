import { SET_COMMENTS } from '../actions/commet.actions'

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
        default:
            return state
    }

}