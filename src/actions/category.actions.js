export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const SELECTED_CATEGORY_CHANGE = 'SELECTED_CATEGORY_CHANGE'

export function receiveCategories(categories) {
    return { type: RECEIVE_CATEGORIES, categories }
}
export function selectedCategoryChange(category) {
    return { type: SELECTED_CATEGORY_CHANGE, category }
}