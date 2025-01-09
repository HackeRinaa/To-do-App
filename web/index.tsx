import { createRoot } from 'react-dom/client';
import App from './App';
import { todoStore } from "./stores/TodoStore";
import { TodoStoreProvider } from "./stores/TodoStoreContext";

const root = createRoot(document.getElementById('app'));

root.render( <TodoStoreProvider store={todoStore}>
    <App />
  </TodoStoreProvider>);