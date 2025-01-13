import { observer } from "mobx-react-lite";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import todoStore from "./stores/TodoStore";
import "./app.css";
import CalendarComponent from "./components/CalendarComponent/CalendarComponent";



const App: React.FC = observer(() => {
  const handleAddTodo = () => {
    if (todoStore.newTitle.trim()) {
      todoStore.addTodo(todoStore.newTitle, todoStore.newColor);
      todoStore.setNewTitle("");
      todoStore.setNewColor("#8338EC");
    }
  };

  return (
      <div className="App">
        <h1 className="title">To-do Calendar</h1>
        <div className="container">
          <div className="calendar-container">
            <CalendarComponent />
          </div>
          <div className="task-container">
            <FilterBar />
            <div className="addTodo">
              <input
                type="text"
                placeholder="Add a Task"
                value={todoStore.newTitle}
                className="taskInput"
                onChange={(e) => todoStore.setNewTitle(e.target.value)}
              />
              <input
                className="colorPicker"
                type="color"
                value={todoStore.newColor}
                onChange={(e) => todoStore.setNewColor(e.target.value)}
              />
              <button onClick={handleAddTodo} className="addButton">Add</button>
            </div>
            <div className="tasklist-cntainer">
              <TaskList />
            </div>
          </div>
        </div>
      </div>
  );
});

export default App;