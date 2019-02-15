export const NAV_ITEM_CHANGE = 'NAV_ITEM_CHANGE'
export const SHOW_COMMENT_MODAL = 'SHOW_COMMENT_MODAL'

export function navItemChange(newNavItem) {
    return { type: NAV_ITEM_CHANGE, newNavItem }
}
export function showCommentModal(show) {
    return { type: SHOW_COMMENT_MODAL, show }
}