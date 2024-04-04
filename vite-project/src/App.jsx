// App.jsx

import React from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To-Do Application</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
