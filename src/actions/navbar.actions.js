export const NAV_ITEM_CHANGE = 'NAV_ITEM_CHANGE'

export function navItemChange(newNavItem) {
    return { type: NAV_ITEM_CHANGE, newNavItem }
}