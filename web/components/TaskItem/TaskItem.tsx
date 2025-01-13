import React from "react";
import { FaTrash } from "react-icons/fa";
import  { Todo } from "../../stores/TodoStore/TodoStore";
import "./taskItem.css";
import { observer } from "mobx-react-lite";
import todoStore from "../../stores/TodoStore";

interface TaskItemProps {
  task: Todo;
}

const TaskItem: React.FC<TaskItemProps> = observer(({ task }) => {

  const handleToggleComplete = () => {
    todoStore.toggleComplete(task.id);
  }

  const handleDelete = () => {
    todoStore.deleteTodo(task.id);
  }

  return (
    <div className="taskItem" style={{ backgroundColor: task.color }}>
      <div className="row">
        <p className={`taskTitle ${task.completed ? "completed" : ""}`}>{task.title}</p>
        <button className="deleteButton" onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
  }
);

export default TaskItem;
