"use client";

import axios from "axios";
import Link from "next/link";
import Post from "@/components/Post";
import { URL_API } from "@/constants/URL";
import { useQuery } from "react-query";

const fetcher = async ({
  queryKey,
}: {
  queryKey: any;
}): Promise<TArticleList> => {
  const [_key, params] = queryKey;
  return await axios.get(URL_API, { params: params }).then((res) => res.data);
};

const RelatedSection = ({ article }: { article: TArticleData }) => {
  const { data, error, isLoading, isError } = useQuery<TArticleList, Error>({
    queryKey: [
      "related",
      {
        categoryId: article.category.id,
        excludedArticleId: article.id,
        perPage: 2,
      },
    ],
    queryFn: fetcher,
  });

  const meta = data?.meta;
  const related = data?.data;

  const Related = () => {
    return isError ? (
      <div>{error.message}</div>
    ) : isLoading ? (
      <>
        <div className="flex flex-row justify-between items-center">
          <div className="w-[300px] h-10 bg-zinc-300 rounded-lg animate-pulse"></div>
          <div className="w-10 h-6 bg-zinc-300 rounded-md animate-pulse"></div>
        </div>
        <div className="w-full h-auto aspect-[2/1] bg-zinc-300 rounded-lg animate-pulse"></div>
      </>
    ) : related && related.length > 0 ? (
      <>
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-4xl font-semibold text-cabin">
            You might also like...
          </h2>
          {meta && meta.pagination.totalPages > 1 ? (
            <Link href={`${article.slug}/relates`}>
              <button className="text-lightgray">More</button>
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div
          className={`grid gap-x-8 ${
            related[1]
              ? "grid-cols-2"
              : "grid-cols-[minmax(0,1fr)_50%_minmax(0,1fr)]"
          }`}
        >
          {related[0] && (
            <Post
              mini
              article={related[0]}
              className={`${related[1] ? "col-start-1" : "col-start-2"}`}
            />
          )}
          {related[1] && (
            <Post mini article={related[1]} className="col-start-2" />
          )}
        </div>
      </>
    ) : (
      <></>
    );
  };

  return (
    <div className="space-y-8">
      <Related />
    </div>
  );
};

export default RelatedSection;
