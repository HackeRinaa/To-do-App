import { makeAutoObservable } from "mobx";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  color: string;
}

export class TodoStore {
  // todos is now an object not an array and is readonly
  readonly todos: Record<number,Todo> = {};
  filter: string = "all";
  searchQuery: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (title: string, color: string) => {
    const id = Date.now();
    this.todos[id] = { id, title, completed: false, color };
  };

  deleteTodo = (id: number) => {
    delete this.todos[id];
  };

  toggleComplete = (id: number) => {
    if (this.todos[id]) {
      this.todos[id].completed = !this.todos[id].completed;
    }
  };

  setFilter = (filter: string) => {
    this.filter = filter;
    console.log ("Filter changed ${}")
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
  }
  
}

