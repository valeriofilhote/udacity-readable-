import { combineReducers } from 'redux'

import navbar from './navbar.reducer'
import post from './post.reducer'
import comment from './comment.reducer'
import category from './category.reducer'

export default combineReducers({ navbar, post, category, comment })
