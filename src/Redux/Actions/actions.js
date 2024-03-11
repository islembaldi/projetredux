export let ADD_TASK = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};
export let UPDATE_TASK = (payload) => {
  return {
    type: UPDATE_TASK,
    payload,
  };
};
export let UPDATE_DONE_TASK = (payload) => {
  return {
    type: UPDATE_DONE_TASK,
    payload,
  };
};
export let DELETE_TASK = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};
