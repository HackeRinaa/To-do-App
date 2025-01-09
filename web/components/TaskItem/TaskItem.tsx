import React from "react";
import { FaTrash } from "react-icons/fa";
import { ITodo } from "../../stores/TodoStore";
import "./taskItem.css";

interface TaskItemProps {
  task: ITodo;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className="taskItem" style={{ backgroundColor: task.color }}>
      <div className="row">
        <p className={`taskTitle ${task.completed ? "completed" : ""}`}>{task.title}</p>
        <button className="deleteButton" onClick={() => onDelete(task.id)}>
          <FaTrash />
        </button>
      </div>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default TaskItem;
