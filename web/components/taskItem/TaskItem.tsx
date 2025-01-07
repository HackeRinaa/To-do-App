import React from "react";
import "./taskItem.css";

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete }) => {
  return (
    <div className="taskItem" style={{ backgroundColor: task.color }}>
      <p className={`taskTitle ${task.completed ? "completed" : ""}`}>
        {task.title}
      </p>
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

interface Task {
  id: number;
  title: string;
  completed: boolean;
  color: string;
}

interface TaskItemProps {
  task: Task;
  toggleComplete: (id: number) => void;
}

export default TaskItem;
