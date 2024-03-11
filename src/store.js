import { createStore } from "redux";
import { taskReducer } from "./Redux/Reducers/taskReducer";

const store = createStore(taskReducer);

export default store;
