<<<<<<< HEAD
import React, { useState } from "react";
import TaskItem from "../TaskItem";
=======
>>>>>>> master
import "./taskList.css";
import { observer } from "mobx-react-lite";
import TaskItem from "../TaskItem";
import todoStore from "../../stores";

<<<<<<< HEAD

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn React", completed: false, color: "#A6AEBF" },
    { id: 2, title: "Build a To-Do App", completed: false, color: "#C5D3E8" },
    { id: 3, title: "Deploy the App", completed: false, color: "#FFF8DE" },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskColor, setNewTaskColor] = useState<string>("#ffeb3b");

  const handleAddTask = () => {
    if (newTaskTitle.trim() === "") return;

    const newTask: Task = {
      id: tasks.length + 1,
      title: newTaskTitle,
      completed: false,
      color: newTaskColor,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  const handleToggleComplete = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
=======
const TaskList: React.FC = observer(() => {
>>>>>>> master

  return (
    <div className="taskList">
      {todoStore.filteredTodos.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
});

// Define the type for a task
interface Task {
    id: number;
    title: string;
    completed: boolean;
    color: string;
  }

export default TaskList;
