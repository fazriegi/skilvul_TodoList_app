import TodoList from "./TodoList";

function Todo() {
  return (
    <div className="container px-96">
      <h1 className="text-center text-3xl mb-8 font-bold">
        What&apos;s the plan for today?
      </h1>
      <form>
        <input
          type="text"
          placeholder="What to do"
          className="w-[89%] h-10 mr-2 border rounded border-slate-400 outline-slate-400 px-2 text-lg"
        />
        <button className="bg-cyan-500 text-white py-2 px-4 rounded-md">
          Add
        </button>
      </form>
      <TodoList />
    </div>
  );
}

export default Todo;
