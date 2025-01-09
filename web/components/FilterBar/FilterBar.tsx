import React from "react";
import { observer } from "mobx-react-lite";
import { useTodoStore } from "../../stores/TodoStoreContext";
import "./filterBar.css";

const FilterBar: React.FC = observer(() => {
  const todoStore = useTodoStore();

  return (
    <div className="filterBar">
      <button className="filterButton" onClick={() => todoStore.setFilter("all")}>All</button>
      <button className="filterButton" onClick={() => todoStore.setFilter("completed")}>Completed</button>
      <button className="filterButton" onClick={() => todoStore.setFilter("incomplete")}>Incomplete</button>
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