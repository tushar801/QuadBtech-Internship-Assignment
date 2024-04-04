// taskReducer.js

import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from '../Actions/TaskActions';

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newStateAdd = [...state, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newStateAdd)); // Save tasks to local storage
      return newStateAdd;
    case DELETE_TASK:
      const updatedStateDelete = state.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedStateDelete)); // Save tasks to local storage
      return updatedStateDelete;
    case TOGGLE_TASK:
      const updatedStateToggle = state.map(task => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(updatedStateToggle)); // Save tasks to local storage
      return updatedStateToggle;
    default:
      return state;
  }
};

export default taskReducer;
