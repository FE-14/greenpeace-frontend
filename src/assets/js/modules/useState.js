export const useState = (initialState) => {
  let state = initialState;

  const setState = (callback) => {
    state = callback(state);
    return state;
  };

  return [state, setState];
};
