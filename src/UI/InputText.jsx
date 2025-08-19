function InputText({ name, placeholder }) {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label
        htmlFor={name}
        className="mb-1 text-gray-700 dark:text-gray-300 font-medium"
      >
        {name}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        className="
          px-4 py-2 
          border border-gray-300 dark:border-gray-700 
          rounded-lg 
          text-gray-900 dark:text-gray-100 
          bg-gray-100 dark:bg-gray-800 
          focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400
          placeholder-gray-400 dark:placeholder-gray-500
          transition-colors
        "
      />
    </div>
  );
}

export default InputText;
