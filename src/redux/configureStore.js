import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';

const initialState = [];

const store = configureStore(rootReducer, initialState);

export default store;
