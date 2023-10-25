import PropTypes from "prop-types";

function Button({ isActive, text }) {
  return (
    <button
      className={`${
        isActive ? "bg-cyan-600" : "bg-slate-400"
      } mr-4 py-1 px-3 rounded-lg text-white font-semibold text-xs`}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Button;
