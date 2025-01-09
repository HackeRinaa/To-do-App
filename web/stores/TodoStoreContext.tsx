import React, { createContext, useContext } from "react";
import { TodoStore } from "./TodoStore";

const TodoStoreContext = createContext<TodoStore | null>(null);

export const TodoStoreProvider: React.FC<{ store: TodoStore; children: React.ReactNode }> = ({
    store,
    children,
}) => {
    return <TodoStoreContext.Provider value={store}>
        {children}
        </TodoStoreContext.Provider>
};

export const useTodoStore = (): TodoStore => {
    const store = useContext(TodoStoreContext);
    if (!store) {
        throw new Error("useTodoStore must be used within a TodoStoreProvider");
    }
    return store;
}