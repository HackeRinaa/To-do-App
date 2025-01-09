import React, { useState } from "react";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import { useTodoStore } from "./stores/TodoStoreContext";
import "./app.css";

const App: React.FC = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#ffffff");
  const todoStore = useTodoStore();

  const handleAddTodo = () => {
    if (title.trim()) {
      todoStore.addTodo(title, color);
      setTitle("");
      setColor("#ffffff");
    }
  };

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      <FilterBar />
      <div className="addTodo">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          className="taskInput"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input className="colorPicker" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <button onClick={handleAddTodo} className="addButton">Add</button>
      </div>
      <TaskList />
    </div>
  );
};

export default App;
