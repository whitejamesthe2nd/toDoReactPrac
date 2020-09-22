// TODO: Import `CREATE_TASK` and `DELETE_TASK` string literal constants
const {CREATE_TASK,DELETE_TASK} = require('../actions/taskActions')

const tasksReducer = (state = {}, action) => {
  const newState = {...state}
  // TODO: Freeze the state
    Object.freeze(state);
  // TODO: Define switch case for routing 'CREATE_TASK' actions and 'DELETE_TASK' actions
  switch(action.type) {
    case CREATE_TASK:
        return {...newState, [action.taskId]:action.taskMessage}

    case DELETE_TASK:
      delete newState[action.taskId];
      return {...newState}
  }
};

export default tasksReducer;
