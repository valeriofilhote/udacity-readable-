import { RECEIVE_ALL_POSTS, SELECT_POST, VOTE_SCORE_CHANGE } from '../actions/post.actions'

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
        case VOTE_SCORE_CHANGE:
            const { posts } = state
            const { post } = action
            const index = posts.findIndex(p => p.id === post.id)
            if (index !== -1) {
                posts[index] = post
            }
            return {
                ...state,
                posts: [...posts]
            }
        default:
            return state
    }
}