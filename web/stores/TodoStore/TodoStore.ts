import { makeAutoObservable } from "mobx";
import calendarStore from "../CalendarStore";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  color: string;
  date: string;
}

export class TodoStore {
  // todos is now an object not an array and is readonly
  readonly todos: Record<number,Todo> = {};
  filter: string = "all";
  searchQuery: string = "";
  newTitle: string = "";
  newColor: string = "#007aff";
  currentDate: string = "";

  constructor() {
    makeAutoObservable(this);
    this.loadTodosFromLocalStorage();
  }

  setNewTitle = (title: string) => {
    console.log("Setting new title:", title);
    this.newTitle = title;
  };

  setNewColor = (color: string) => {
    this.newColor = color;
  };

  saveTodosToLocalStorage = () => {
    const todosArray = Object.values(this.todos);
    localStorage.setItem("todos", JSON.stringify(todosArray));
  }

  loadTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const todosArray = JSON.parse(storedTodos) as Todo[];
      todosArray.forEach((todo) => {
        this.todos[todo.id] = todo;
      });
    }
  };

  addTodo = (title: string, color: string) => {
    const id = Date.now();
    const date = calendarStore.value?.toISOString().split("T")[0] || "";
    this.todos[id] = { id, title, completed: false, color, date };
    this.saveTodosToLocalStorage();
  };

  getTodosForSelectedDate(): Todo[] {
    const selectedDate = calendarStore.value?.toISOString().split("T")[0] || "";
    return Object.values(this.todos).filter((todo) => todo.date === selectedDate);
  }

  deleteTodo = (id: number) => {
    delete this.todos[id];
    this.saveTodosToLocalStorage();
  };

  toggleComplete = (id: number) => {
    if (this.todos[id]) {
      this.todos[id].completed = !this.todos[id].completed;
      this.saveTodosToLocalStorage();
    }
  };

  setCurrentDate = (date: string) => {
    this.currentDate = date; // Set the current selected date
  };

  setFilter = (filter: string) => {
    this.filter = filter;
  };

  setSearchQuery = (query: string) => {
    this.searchQuery = query;
  };

  get filteredTodos(): Todo[] {
    const filterByStatus = (todo: Todo) => {
      if (this.filter === "completed") {
        return todo.completed;
      }
      if (this.filter === "incomplete") {
        return !todo.completed;
      }
      return true; // 'all' filter returns all todos
    };
  
    const filterBySearchQuery = (todo: Todo) => {
      if (!this.searchQuery.trim()) {
        return true; // If no search query, include all
      }
      return todo.title.toLowerCase().startsWith(this.searchQuery.toLowerCase());
    };
  
    return Object.values(this.todos).filter(
      (todo) => filterByStatus(todo) && filterBySearchQuery(todo)
    );
  };
  
}