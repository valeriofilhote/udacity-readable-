import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './containers/App/App';

import rootReducer from './reducers'
import middlewares from './middlewares'

const store = createStore(rootReducer, middlewares)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
