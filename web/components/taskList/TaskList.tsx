import React, { useState } from "react";
import TaskItem from "../taskItem/TaskItem";
import "./taskList.css";

// Define the type for a task
interface Task {
  id: number;
  title: string;
  completed: boolean;
  color: string;
}

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

    // Set a timer to remove the task after 3 seconds if completed
    const taskToRemove = tasks.find((task) => task.id === id);
    if (taskToRemove && !taskToRemove.completed) {
      setTimeout(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      }, 1500); 
    }
  };

  return (
    <div className="container">
      <h1 className="title">Your Sticky Notes</h1>
      <div className="taskGrid">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} toggleComplete={handleToggleComplete} />
        ))}
      </div>

      <div className="addTaskForm">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter task title"
          className="taskInput"
        />
        <input
          type="color"
          value={newTaskColor}
          onChange={(e) => setNewTaskColor(e.target.value)}
          className="colorPicker"
        />
        <button onClick={handleAddTask} className="addButton">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskList;
