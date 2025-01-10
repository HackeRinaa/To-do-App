import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import todoStore from "./stores";
import "./app.css";

const App: React.FC = () => {

  const handleAddTodo = () => {
    if (todoStore.newTitle.trim()) {
      todoStore.addTodo(todoStore.newTitle, todoStore.newColor);
      todoStore.setNewTitle("");
      todoStore.setNewColor("#9e7bab");
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
          value={todoStore.newTitle}
          className="taskInput"
          onChange={(e) => todoStore.setNewTitle(e.target.value)}
        />
        <input className="colorPicker" type="color" value={todoStore.newColor} onChange={(e) => todoStore.setNewColor(e.target.value)} />
        <button onClick={handleAddTodo} className="addButton">Add</button>
      </div>  
      <div className="taskContainer">
        <TaskList />
      </div>
    </div>
  );
};

export default App;
