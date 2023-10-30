import { useState } from "react";
import FilterButton from "./FilterButton";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const [filter, setFilter] = useState("all");
  let { todos } = useSelector((state) => state.todos);

  if (filter === "active") {
    todos = todos.filter((todo) => !todo.status);
  } else if (filter === "completed") {
    todos = todos.filter((todo) => todo.status);
  }

  return (
    <div className="mt-5">
      <div>
        <FilterButton filter={filter} text="all" setFilter={setFilter} />
        <FilterButton filter={filter} text="active" setFilter={setFilter} />
        <FilterButton filter={filter} text="completed" setFilter={setFilter} />
      </div>
      <div className="mt-8 flex flex-wrap justify-between gap-4">
        {todos.length > 0 ? (
          <TodoItem todos={todos} />
        ) : (
          <div className="mt-2 mx-auto">
            <h1 className="text-md font-semibold">empty!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoList;
