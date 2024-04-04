// store.js

import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Reducers/Taskreducer';

const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
});

export default store;
