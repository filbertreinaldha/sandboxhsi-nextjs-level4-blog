const RelatedSkeleton = () => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-2 bg-white rounded-lg shadow overflow-hidden">
        <div className="cols-start-1 p-8 animate-pulse">
          <div className="flex flex-col gap-y-4">
            <div className="w-10 h-8 bg-zinc-300 rounded-md"></div>
            <div className="w-full h-32 bg-zinc-300 rounded-md"></div>
            <div className="w-full h-32 bg-zinc-300 rounded-md"></div>
          </div>
        </div>
        <div className="cols-start-2 animate-pulse">
          <div className="w-[450px] h-full bg-zinc-300"></div>
        </div>
      </div>
    </div>
  );
};

export default RelatedSkeleton;
