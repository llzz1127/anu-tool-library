export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-emerald-600 text-white rounded-lg px-4 py-2 hover:bg-emerald-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}