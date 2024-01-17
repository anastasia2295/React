import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, compose, applyMiddleware} from "redux"
import { rootReducer } from './redux/rootReducer';
import App from './App';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { spamFilter } from './redux/middleware';

const store  = createStore(rootReducer, compose(applyMiddleware(
  thunk,
  spamFilter
),
))

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
