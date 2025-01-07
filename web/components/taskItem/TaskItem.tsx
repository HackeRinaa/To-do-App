import React from "react";
import "./taskItem.css";

// Define props type for TaskItem
interface TaskItemProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
    color: string;
  };
  toggleComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete }) => {
  return (
    <div className="taskItem" style={{ backgroundColor: task.color }}>
      <p className={`taskTitle ${task.completed ? "completed" : ""}`}>{task.title}</p>
      <label className="custom-checkbox">
        <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            className="completeCheckbox"
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default TaskItem;
