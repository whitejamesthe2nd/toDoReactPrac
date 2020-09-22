const STATE_KEY = 'tasks';

export const loadState = () => {
  // TODO: Try to access the stored tasks state from local storage
  // TODO: If there is no state found, return `undefined`
  // TODO: If the state was found, return the state (parsed into JavaScript)

  // TODO: Catch any errors with a `console.warn` statement and return undefined
  try {
    const storedState = localStorage.getItem(STATE_KEY);
    if(storedState){
      return JSON.parse(storedState);
    }else{
      return undefined;
    }

  } catch (error) {
    console.warn(error);
  }
};

export const saveState = (state) => {
  // TODO: Try to parse the state from JavaScript into a JSON string
  // TODO: Set the JSON string into local storage

  // TODO: Catch any errors with a `console.warn` statement
  try {
    let stringed = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, stringed);
  } catch (error) {
    console.warn(error)
  }
};
