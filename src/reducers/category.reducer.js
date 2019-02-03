import { RECEIVE_CATEGORIES } from '../actions/category.actions'

const initState = {
    categories: []
}
export default function (state = initState, action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        default:
            return state
    }
}