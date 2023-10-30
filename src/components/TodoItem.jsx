import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  deleteTodo,
  editTodo,
  toggleTodoStatus,
} from "../redux/actions/todo-actions";
import Swal from "sweetalert2";

function TodoItem({ todos }) {
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    const id = e.currentTarget.parentNode.id;
    const todo = todos.find((todo) => todo.id === id);

    Swal.fire({
      title: "Edit todo",
      input: "text",
      inputValue: todo.value,
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      cancelButtonColor: "#94a3b8",
      confirmButtonColor: "#0ea5e9",
      confirmButtonText: "Save",
      showLoaderOnConfirm: true,
      preConfirm: (value) => {
        dispatch(editTodo(id, value));
      },
    });
  };

  const handleDelete = (e) => {
    dispatch(deleteTodo(e.currentTarget.parentNode.id));
  };

  const handleCheckbox = (e) => {
    dispatch(toggleTodoStatus(e.target.id));
  };
  return (
    <>
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
            <button onClick={handleEdit}>✏️</button>
            <button onClick={handleDelete}>❌</button>
          </div>
        </div>
      ))}
    </>
  );
}

TodoItem.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoItem;
