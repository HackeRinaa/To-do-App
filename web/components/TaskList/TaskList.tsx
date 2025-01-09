import React from "react";
import { observer } from "mobx-react-lite";
import TaskItem from "../TaskItem";
import { useTodoStore } from "../../stores/TodoStoreContext";

const TaskList: React.FC = observer(() => {
  const todoStore = useTodoStore();

  return (
    <div className="taskList">
      {todoStore.filteredTodos.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={todoStore.toggleComplete}
          onDelete={todoStore.deleteTodo}
        />
      ))}
    </div>
  );
});

export default TaskList;
