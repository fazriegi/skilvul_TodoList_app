import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

function Todo() {
  return (
    <div className="containe p-6 bg-white rounded-lg drop-shadow-2xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] min-h-[90vh]">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl mb-8 font-bold">
        What&apos;s the plan for today?
      </h1>
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default Todo;
