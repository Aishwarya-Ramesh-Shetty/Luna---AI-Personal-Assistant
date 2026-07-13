function Input(props) {
  return (
    <input
      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-violet-500"
      {...props}
    />
  );
}

export default Input;