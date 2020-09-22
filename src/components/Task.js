import React from 'react';

// TODO: Take in `deleteTask` method and `task` object as props
const Task = (props) => {
  const handleClick = () => {
    // TODO: Delete task
    props.deleteTask(props.key);
  }

  return (
    <li>
      <h1>{props.task}</h1>

      <button onClick={handleClick}>Delete Task</button>
    </li>
  );
}

export default Task;
