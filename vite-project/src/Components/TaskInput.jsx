// TaskInput.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Actions/TaskActions';

function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
      // Store tasks in local storage
      localStorage.setItem('tasks', JSON.stringify([...JSON.parse(localStorage.getItem('tasks') || '[]'), { id: Date.now(), title: task }]));
    }
  };

  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
