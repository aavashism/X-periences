// Import necessary modules and components
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Import reducers
import { reducers } from './reducers';
import App from './App';
import './index.css';

// Create Redux store
const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

// Render the App wrapped in the Provider, passing in the Redux store as a prop
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
