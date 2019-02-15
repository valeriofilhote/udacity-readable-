import { RECEIVE_CATEGORIES, SELECTED_CATEGORY_CHANGE } from '../actions/category.actions'

const initState = {
    categories: [],
    selectedCategory: 'all'
}
export default function (state = initState, action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        case SELECTED_CATEGORY_CHANGE:
            return {
                ...state,
                selectedCategory: action.category
            }
        default:
            return state
    }
}