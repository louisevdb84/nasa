import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import App from './containers/App';
import './index.css';
import { searchImages, requestImage } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';

const logger = createLogger();

const rootReducer = combineReducers({ searchImages, requestImage })

const store =
  createStore(rootReducer,
    applyMiddleware(thunkMiddleWare, logger));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);