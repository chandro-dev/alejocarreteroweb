// store.js
import { configureStore  } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import  reducer from './reducer';

const store = configureStore ({reducer:combineReducers({reductor:reducer})});

export default store;
