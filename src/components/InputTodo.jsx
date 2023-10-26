import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todo-actions";

function InputTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form className="flex">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="What to do"
        className="w-[100%] h-10 mr-2 border rounded border-slate-400 outline-slate-400 px-2 text-lg"
      />
      <button
        className="bg-cyan-500 text-white py-2 px-4 rounded-md"
        onClick={handleClick}
      >
        Add
      </button>
    </form>
  );
}

export default InputTodo;
