import "./taskList.css";
import { observer } from "mobx-react-lite";
import TaskItem from "../TaskItem";
import todoStore from "../../stores/TodoStore";

const TaskList: React.FC = observer(() => {

  const tasks = todoStore.getTodosForSelectedDate();

  return (
    <div className="taskList">
      {tasks.map((todo) => (
        <TaskItem
          key={todo.id}
          task={todo}
        />
      ))}
    </div>
  );
});


export default TaskList;
