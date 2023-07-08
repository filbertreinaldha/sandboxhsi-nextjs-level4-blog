"use client";

import axios from "axios";
import { URL_API } from "@/constants/URL";
import LoadMore from "@/components/LoadMore";
import RelatedPost from "@/components/RelatedPost";
import RelatedSkeleton from "@/components/skeletons/RelatedSkeleton";
import { useInfiniteQuery } from "react-query";

const fetcher = async ({
  queryKey,
  pageParam = 1,
}: {
  queryKey: (string | TRelatesParam)[];
  pageParam: number;
}): Promise<TArticleList> => {
  const [_key, params] = queryKey;
  return await axios.get(URL_API, {
    params: { page: pageParam, ...(params as TRelatesParam) },
  });
};

const RelatedList = ({ relatesParam }: { relatesParam: TRelatesParam }) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isError,
  } = useInfiniteQuery<TInfiniteArticle, Error, TInfinitePage, any>({
    queryKey: ["relates", relatesParam],
    queryFn: fetcher,
    getNextPageParam: (lastPage: TInfinitePage) => {
      if (
        lastPage.data.meta.pagination.page <
        lastPage.data.meta.pagination.totalPages
      )
        return lastPage.data.meta.pagination.page + 1;
    },
  });

  const realIndex = (page: number, idx: number) => {
    return (page - 1) * 4 + idx;
  };

  const Relateds = () => {
    return isFetching && !data ? (
      <RelatedSkeleton />
    ) : isError ? (
      <div>{error.message}</div>
    ) : (
      <>
        {data?.pages.map((page: TInfinitePage) =>
          page.data.data.map((article: TArticleData, idx: number) => (
            <RelatedPost
              article={article}
              index={realIndex(page.data.meta.pagination.page, idx)}
              key={article.id}
            />
          )),
        )}
        {isFetchingNextPage && <RelatedSkeleton />}
      </>
    );
  };

  return (
    <>
      <Relateds />
      <LoadMore
        fetchMore={() => fetchNextPage()}
        noMore={!hasNextPage}
        isLoading={isFetchingNextPage}
      />
    </>
  );
};

export default RelatedList;
