import { nanoid } from "nanoid";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo = { id: nanoid(), value: action.payload, status: false };
      const newTodos = [...state.todos, newTodo];

      localStorage.setItem("todos", JSON.stringify(newTodos));

      return { ...state, todos: newTodos };
    }
    case "EDIT_TODO": {
      const cloneTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, value: action.payload.value };
        }
        return todo;
      });

      localStorage.setItem("todos", JSON.stringify(cloneTodos));

      return { ...state, todos: cloneTodos };
    }
    case "DELETE_TODO": {
      const cloneTodos = [...state.todos];
      const index = cloneTodos.findIndex((todo) => todo.id === action.payload);

      cloneTodos.splice(index, 1);

      localStorage.setItem("todos", JSON.stringify(cloneTodos));

      return { ...state, todos: cloneTodos };
    }
    case "TOGGLE_TODO_STATUS": {
      const cloneTodos = [...state.todos];
      const index = cloneTodos.findIndex((todo) => todo.id === action.payload);
      const updatedTodo = {
        ...cloneTodos[index],
        status: !cloneTodos[index].status,
      };

      cloneTodos[index] = updatedTodo;
      localStorage.setItem("todos", JSON.stringify(cloneTodos));

      return { ...state, todos: cloneTodos };
    }

    default:
      return state;
  }
}

export default todoReducer;
