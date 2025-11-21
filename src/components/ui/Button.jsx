import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
