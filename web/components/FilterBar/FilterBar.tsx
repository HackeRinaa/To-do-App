import { observer } from "mobx-react-lite";
import todoStore from "../../stores/TodoStore";
import "./filterBar.css";

const FilterBar: React.FC = observer(() => {
  return (
    <div className="filterBar">
      <button
        className={`filterButton ${todoStore.filter === "all" ? "active" : ""}`}
        onClick={() => todoStore.setFilter("all")}
      >
        All
      </button>
      <button
        className={`filterButton ${todoStore.filter === "completed" ? "active" : ""}`}
        onClick={() => todoStore.setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={`filterButton ${todoStore.filter === "incomplete" ? "active" : ""}`}
        onClick={() => todoStore.setFilter("incomplete")}
      >
        Incomplete
      </button>
      <input
        type="text"
        placeholder="Search"
        value={todoStore.searchQuery}
        className="searchInput"
        onChange={(e) => todoStore.setSearchQuery(e.target.value)}
      />
    </div>
  );
});

export default FilterBar;