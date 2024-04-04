import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from '../Actions/TaskActions'; // Import addTask action

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask("New Task")); // Dispatch addTask action with a default task title
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default TaskList;
