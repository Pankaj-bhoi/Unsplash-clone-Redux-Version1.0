import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Reducers'
import * as serviceWorker from './serviceWorker';
import App from './App'
     
const loggerMiddleware = createLogger()
const store = createStore(rootReducer,applyMiddleware(
    thunkMiddleware,loggerMiddleware 
  )
);

console.log(store)
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();