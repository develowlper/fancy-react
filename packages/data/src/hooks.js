import { useReducer } from 'react';

const useStore = (item, actions) => {
  const [store, dispatch] = useReducer(actions, item);

  return {
    store,
    add: item => dispatch({ type: 'add', payload: item }),
    remove: item => dispatch({ type: 'remove', payload: item }),
    reset: () => dispatch({ type: 'reset' })
  };
};

export { useStore };
