// Basic Card wrapper
export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow p-4 transition hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

// Card content wrapper
export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
