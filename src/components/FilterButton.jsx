import PropTypes from "prop-types";

function FilterButton({ filter, text, setFilter }) {
  return (
    <button
      className={`${
        filter === text ? "bg-cyan-600" : "bg-slate-400"
      } mr-4 py-1 px-3 rounded-xl text-white font-semibold text-sm hover:scale-110 transition duration-300`}
      id={text}
      onClick={(e) => setFilter(e.target.id)}
    >
      {text}
    </button>
  );
}

FilterButton.propTypes = {
  filter: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterButton;
