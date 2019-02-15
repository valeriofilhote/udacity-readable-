import { NAV_ITEM_CHANGE, SHOW_COMMENT_MODAL } from '../actions/navbar.actions'

const initState = {
    navitemSelected: 'Home', // Home, New Post, Editing Post, Post Detail
    showCommentModal: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case NAV_ITEM_CHANGE:
            return {
                ...state,
                navitemSelected: action.newNavItem
            }
        case SHOW_COMMENT_MODAL:
            return {
                ...state,
                showCommentModal: action.show
            }
        default:
            return state
    }
}