export function addTodo(data) {
  return { type: "ADD_TODO", payload: data };
}

export function deleteTodo(id) {
  return { type: "DELETE_TODO", payload: id };
}

export function toggleTodoStatus(id) {
  return { type: "TOGGLE_TODO_STATUS", payload: id };
}
