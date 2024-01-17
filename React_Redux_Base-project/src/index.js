import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, compose, applyMiddleware} from "redux"
import { rootReducer } from './redux/rootReducer';
import App from './App';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const store  = createStore(rootReducer, compose(applyMiddleware(
  thunk
),
))

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
