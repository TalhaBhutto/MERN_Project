import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,componse, combineReducers} from 'redux';
import thunk from 'redux-thunk';

const store=createStore(combineReducers,compose(applyMiddleware(thunk)));

ReactDOM.render(<App/>, document.getElementById('root'));