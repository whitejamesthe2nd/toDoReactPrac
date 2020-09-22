import React from 'react';
import Task from './Task';
import store from '../store';
import {deleteTask} from '../actions/taskActions'
// TODO: Import the application's Redux store instance
// TODO: Import the `deleteTask` action creator function

class TodoList extends React.Component {
  componentDidMount() {
    // TODO: Use `store.subscribe` to force an update when the state changes
    // TODO: Name the subscription as `this.unsubscribe`
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    // TODO: Check if `this.unsubscribe` is defined
    // TODO: If its defined, invoke `this.unsubscribe`
    if(this.unsubscribe){
      this.unsubscribe();
    }
  }

  deleteTask = (id) => {
    // TODO: Invoke `deleteTask` based on an `id` input
    //       and dispatch a 'DELETE_TASK' action
    store.dispatch(deleteTask(id));
  }

  render() {
    // TODO: Get the tasks stored in state with the `getState` method
    // TODO: Use debugger to view state
    let tasks = store.getState();
    console.log(store);
    console.log(tasks);
    // TODO: If there are no tasks stored in state, return `null`.
    if(!tasks) { return null};
    let tagArray =[];
    for ( let task in tasks){
      tagArray.push(<Task task={tasks[task]} deleteTask={this.deleteTask} key={task} />)
    }
    return (
      <ul>
        {tagArray}
      </ul>
    );
  }
}

export default TodoList;
