import React, { useState } from "react";
import TaskItem from "../TaskItem";
import "./taskList.css";

const TaskList: React.FC = () => {

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn React", completed: false, color: "#A6AEBF" },
    { id: 2, title: "Build a To-Do App", completed: false, color: "#C5D3E8" },
    { id: 3, title: "Deploy the App", completed: false, color: "#FFF8DE" },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskColor, setNewTaskColor] = useState<string>("#FFF8DE");
  const [filter, setFilter] = useState<string>("all"); 
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed" && !task.completed) return false;
    if (filter === "notCompleted" && task.completed) return false;

        // Apply "search query" filter (case-insensitive, starts with)
        if (searchQuery.trim() !== "" && !task.title.toLowerCase().startsWith(searchQuery.toLowerCase())) {
          return false;
        }
    
        return true;
  });

  return (
    <div className="taskListContainer">
      <h1 className="title">Your Todos</h1>

      {/* Filter Buttons */}
      <div className="filterContainer">
        <button
          className={`filterButton ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`filterButton ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={`filterButton ${filter === "notCompleted" ? "active" : ""}`}
          onClick={() => setFilter("notCompleted")}
        >
          Not Completed
        </button>
      </div>

            {/* Search Bar */}
            <div className="searchContainer">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="searchInput"
        />
      </div>

      {/* Task Input */}
      <div className="taskInputContainer">
        <input
          type="text"
          placeholder="New Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
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

      {/* Render Filtered Tasks */}
      <div className="taskItemsContainer">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={handleToggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

interface Task {
  id: number;
  title: string;
  completed: boolean;
  color: string;
}


export default TaskList;
