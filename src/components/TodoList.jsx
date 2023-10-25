import { useState } from "react";

function TodoList() {
  const [filter, setFilter] = useState("all");

  const handleClick = (e) => {
    setFilter(e.target.id);
  };

  return (
    <div className="mt-5">
      <div>
        <button
          className={`${
            filter === "all" ? "bg-cyan-600" : "bg-slate-400"
          } mr-4 py-1 px-3 rounded-xl text-white font-semibold text-sm hover:scale-110 transition duration-300`}
          id="all"
          onClick={handleClick}
        >
          ALL
        </button>
        <button
          className={`${
            filter === "active" ? "bg-cyan-600" : "bg-slate-400"
          } mr-4 py-1 px-3 rounded-xl text-white font-semibold text-sm hover:scale-110 transition duration-300`}
          id="active"
          onClick={handleClick}
        >
          ACTIVE
        </button>
        <button
          className={`${
            filter === "completed" ? "bg-cyan-600" : "bg-slate-400"
          } mr-4 py-1 px-3 rounded-xl text-white font-semibold text-sm hover:scale-110 transition duration-300`}
          id="completed"
          onClick={handleClick}
        >
          COMPLETED
        </button>
      </div>
      <div className="mt-4 flex flex-wrap justify-between gap-4">
        <div className="border-2 rounded w-full flex justify-between px-2 py-2 overflow-auto">
          <span className="text-lg">belajar</span>
          <div>
            <button>✏️</button>
            <button>❌</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
