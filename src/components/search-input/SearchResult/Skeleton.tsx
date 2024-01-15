const SearchResultSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gray-300 animate-pulse" />
      <div className="flex-1 space-y-2">
        <div className="w-3/4 h-4 bg-gray-300 rounded-full animate-pulse" />
        <div className="w-1/2 h-3 bg-gray-300 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default SearchResultSkeleton;