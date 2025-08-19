function Button({ label, fnClick }) {
  return (
    <button
      className="
        w-11/12 mx-5 my-2 px-4 py-2
        rounded-lg font-medium uppercase tracking-wide
        bg-emerald-600 text-white
        hover:bg-emerald-700
        dark:bg-emerald-500 dark:text-gray-900
        dark:hover:bg-emerald-600 dark:hover:text-white
        transition-colors duration-200
      "
      onClick={fnClick}
      type="button"
    >
      {label}
    </button>
  );
}

export default Button;
