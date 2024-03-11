import {
  DELETE_TASK,
  UPDATE_DONE_TASK,
  UPDATE_TASK,
  ADD_TASK,
} from "../constants/actionType";

const initialState = {
  tasks: [
    {
      description: "test description",
      done: false,
      id: Math.random(),
      imageUrl:
        "https://th.bing.com/th/id/R.a5fb3554ecbed0ae5f655eb0c6265518?rik=ed2ZHhDtLn%2f1pw&pid=ImgRaw&r=0",
    },
  ],
};

export const taskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { done: false, id: Math.random(), description: payload },
        ],
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          task.id === payload.id
            ? { ...task, description: payload.description }
            : task
        ),
      };
    case UPDATE_DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          task.id === payload.id ? { ...task, done: !task.done } : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => task.id !== payload.id),
      };
    default:
      return state;
  }
};
