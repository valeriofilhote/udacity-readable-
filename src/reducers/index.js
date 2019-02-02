import { combineReducers } from 'redux'

import navbar from './navbar.reducer'
import post from './post.reducer'

export default combineReducers({ navbar, post })
