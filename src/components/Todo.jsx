import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

function Todo() {
  return (
    <div className="container px-[4%] md:px-[8%] lg:px-[18%] xl:px-[25%]">
      <h1 className="text-center text-3xl mb-8 font-bold">
        What&apos;s the plan for today?
      </h1>
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default Todo;
