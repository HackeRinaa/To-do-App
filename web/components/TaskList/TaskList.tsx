import "./taskList.css";
import { observer } from "mobx-react-lite";
import TaskItem from "../TaskItem";
import todoStore from "../../stores";

const TaskList: React.FC = observer(() => {

  return (
    <div className="taskList">
      {todoStore.filteredTodos.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
});


export default TaskList;
