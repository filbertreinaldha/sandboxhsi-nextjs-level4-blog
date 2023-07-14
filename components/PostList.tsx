"use client";
import axios from "axios";
import LoadMore from "@/components/LoadMore";
import Post from "@/components/Post";
import PostSkeleton from "@/components/skeletons/PostSkeleton";
import { URL_API } from "@/constants/URL";
import { useInfiniteQuery } from "react-query";

const fetcher = async ({
  queryKey,
  pageParam = 1,
}: {
  queryKey: readonly any[];
  pageParam: number;
}): Promise<TArticleList> => {
  const [_key, params] = queryKey;
  return await axios.get(URL_API, {
    params: { page: pageParam, sort: params.sort },
  });
};

const PostList = ({
  initialArticles,
  param,
}: {
  initialArticles: TArticleList;
  param: { [key: string]: string | undefined };
}) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isError,
  } = useInfiniteQuery<TInfiniteArticle, Error, TInfinitePage, any>({
    queryKey: ["posts", param],
    queryFn: fetcher,
    getNextPageParam: (lastPage: TInfinitePage) => {
      if (
        lastPage.data.meta.pagination.page <
        lastPage.data.meta.pagination.totalPages
      )
        return lastPage.data.meta.pagination.page + 1;
    },
    initialData: { pageParams: undefined, pages: [{ data: initialArticles }] },
  });

  const Posts = () => {
    return isFetching && !data ? (
      <PostSkeleton />
    ) : isError ? (
      <div>{error.message}</div>
    ) : (
      <>
        {data?.pages.map((page: TInfinitePage) =>
          page.data.data.map((article: TArticleData) => (
            <Post article={article} />
          )),
        )}
        {isFetchingNextPage && <PostSkeleton />}
      </>
    );
  };

  return (
    <div className="flex flex-col py-8 items-center">
      <div className="px-8">
        <Posts />
      </div>
      <LoadMore
        fetchMore={() => fetchNextPage()}
        noMore={!hasNextPage}
        isLoading={isFetchingNextPage}
      />
    </div>
  );
};

export default PostList;
