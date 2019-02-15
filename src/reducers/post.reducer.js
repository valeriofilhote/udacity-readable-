import {
    RECEIVE_ALL_POSTS,
    SELECT_POST,
    VOTE_SCORE_CHANGE,
    SORTED_BY_CHANGE
} from '../actions/post.actions'
import * as util from '../util'

const initState = {
    posts: [],
    selectedPost: null,
    sortedBy: 'byDate', //'byDate' or 'byVoteScore'
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
        case SORTED_BY_CHANGE:
            return {
                ...state,
                posts: [...util.sortedBy(action.sortedBy, state.posts)],
                sortedBy: action.sortedBy
            }
        default:
            return state
    }
}