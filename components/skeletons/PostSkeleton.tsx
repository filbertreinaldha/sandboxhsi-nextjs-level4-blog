const PostSkeleton = ({ mini = false }: { mini?: boolean }) => {
  return (
    <div
      className={`mb-4 sm:mb-8 lg:mb-16 flex flex-col gap-y-4 animate-pulse w-full`}
    >
      <div className="w-full h-auto aspect-[3/2] rounded-lg bg-zinc-300"></div>
      <div className=" w-1/2 h-6 rounded-lg bg-zinc-300"></div>
      <div
        className={`${mini ? "h-12" : "h-20"} w-full rounded-lg bg-zinc-300`}
      ></div>
      <div
        className={`${
          mini ? "block" : "hidden"
        } w-full h-24 rounded-lg bg-zinc-300`}
      ></div>
    </div>
  );
};

export default PostSkeleton;
