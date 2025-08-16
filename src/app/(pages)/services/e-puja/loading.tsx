export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="p-4 border rounded animate-pulse space-y-2">
          <div className="h-4 bg-gray-300 w-3/4 rounded"></div>
          <div className="h-4 bg-gray-200 w-1/2 rounded"></div>
        </div>
      ))}
    </div>
  );
}
