"use client";

const LoadMore = ({
  fetchMore,
  noMore,
  isLoading = false,
}: {
  fetchMore: () => void;
  noMore: boolean;
  isLoading: boolean;
}) => {
  return (
    <button
      onClick={fetchMore}
      hidden={noMore}
      disabled={isLoading}
      className="font-semibold text-watermelon border-solid border-2 border-watermelon rounded-full w-fit px-10 py-3 text-lg"
    >
      {isLoading ? "Loading..." : "Load More"}
    </button>
  );
};

export default LoadMore;
