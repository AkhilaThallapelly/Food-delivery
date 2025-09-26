const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-xl h-56 w-full animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
