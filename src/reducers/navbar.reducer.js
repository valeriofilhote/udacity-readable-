import { NAV_ITEM_CHANGE } from '../actions/navbar.actions'

const initState = {
    navitemSelected: 'Home' // Home, New Post, Editing Post, Post Detail
}

export default function (state = initState, action) {
    switch (action.type) {
        case NAV_ITEM_CHANGE:
            return {
                navitemSelected: action.newNavItem
            }
        default:
            return state
    }
}