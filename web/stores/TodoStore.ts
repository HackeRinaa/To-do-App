import { makeAutoObservable } from "mobx";

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  color: string;
}

export class TodoStore {
  todos: ITodo[] = [];
  filter: "all" | "completed" | "incomplete" = "all";
  searchQuery: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (title: string, color: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title,
      completed: false,
      color,
    };
    this.todos.push(newTodo);
  };

  deleteTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  toggleComplete = (id: number) => {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };

  setFilter = (filter: "all" | "completed" | "incomplete") => {
    this.filter = filter;
  };

  setSearchQuery = (query: string) => {
    this.searchQuery = query;
  };

  get filteredTodos() {
    let filtered = this.todos;
    if (this.filter === "completed") {
      filtered = filtered.filter((todo) => todo.completed);
    } else if (this.filter === "incomplete") {
      filtered = filtered.filter((todo) => !todo.completed);
    }

    if (this.searchQuery) {
      filtered = filtered.filter((todo) =>
        todo.title.toLowerCase().startsWith(this.searchQuery.toLowerCase())
      );
    }

    return filtered;
  }
}

export const todoStore = new TodoStore();
