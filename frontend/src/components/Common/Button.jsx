import clsx from "clsx";

function Button({
  children,
  className,
  variant = "primary",
  ...props
}) {
  const variants = {
    primary:
      "bg-violet-600 hover:bg-violet-500 text-white",

    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white",

    outline:
      "border border-slate-700 hover:bg-slate-800 text-white",
  };

  return (
    <button
      className={clsx(
        "rounded-xl px-5 py-3 font-medium transition-all duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;