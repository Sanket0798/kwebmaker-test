// components/Button.js
export default function Button({ children, className = "", onClick }) {
  return (
    <button
      className={`w-[109px] h-[38px] flex items-center justify-center rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
