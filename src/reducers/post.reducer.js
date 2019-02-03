import { RECEIVE_ALL_POSTS, SELECT_POST } from '../actions/post.actions'

const initState = {
    posts: [],
    selectedPost: null
}

export default function (state = initState, action) {
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case SELECT_POST:
            return {
                ...state,
                selectedPost: action.post
            }
        default:
            return state
    }
}