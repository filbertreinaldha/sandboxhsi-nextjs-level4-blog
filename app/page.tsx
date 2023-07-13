import axios from "axios";
import Nav from "@/components/Nav";
import PostList from "@/components/PostList";
import { URL_API } from "@/constants/URL";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandbox HSI Next.js Level 4 - Blog",
};

const fetcher = async (params: TSearchParam) => {
  if (params.sort != "popular") params.sort = "new";

  return (
    await axios.get<TArticleList>(URL_API, { params: { sort: params.sort } })
  ).data;
};

export default async function Home({
  searchParams,
}: {
  searchParams: TSearchParam;
}) {
  const initialArticles = await fetcher(searchParams);

  return (
    <>
      <Nav />
      {initialArticles && (
        <PostList initialArticles={initialArticles} param={searchParams} />
      )}
    </>
  );
}
