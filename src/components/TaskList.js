import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import "./style.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
