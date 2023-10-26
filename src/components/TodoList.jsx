import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteTodo, toggleTodoStatus } from "../redux/actions/todo-actions";
import FilterButton from "./FilterButton";

function TodoList() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");
  let { todos } = useSelector((state) => state.todos);

  const handleDelete = (e) => {
    console.log(e.currentTarget.parentNode.id);
    dispatch(deleteTodo(e.currentTarget.parentNode.id));
  };

  const handleCheckbox = (e) => {
    dispatch(toggleTodoStatus(e.target.id));
  };

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
      <div className="mt-4 flex flex-wrap justify-between gap-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="border-2 rounded w-full flex justify-between px-2 py-2 overflow-auto"
          >
            <div className="flex items-center gap-2">
              <input
                defaultChecked={todo.status}
                type="checkbox"
                name="complete"
                className="w-5 h-4"
                onChange={handleCheckbox}
                id={todo.id}
              />
              <span className="text-lg">{todo.value}</span>
            </div>
            <div id={todo.id}>
              <button>✏️</button>
              <button onClick={handleDelete}>❌</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
