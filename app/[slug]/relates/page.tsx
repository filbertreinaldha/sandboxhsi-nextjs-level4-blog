import axios from "axios";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import RelatedList from "@/components/RelatedList";
import RelatedPostSummary from "@/components/RelatedPostSummary";
import { URL_API } from "@/constants/URL";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Related Page - Sandbox HSI Next.js Level 4 - Blog",
};

// const fetcher = async (URL: string) => {
//   return await axios
//     .get(URL)
//     .then((res) => res.data)
//     .catch((e) => e.response);
// };

const Relates = async ({ params }: { params: { slug: string } }) => {
  // const article = await fetcher(`${URL_API}/${params.slug}`);

  // if (article?.status == "404") {
  //   notFound();
  // }

  const response = (await axios
    .get<TArticleDetail>(`${URL_API}/${params.slug}`)
    .then((res) => res.data)
    .catch((e) => e.response));

  if (response.status == "404") notFound();

  const article = response.data;

  const relatesParam: TRelatesParam = {
    categoryId: article.category.id,
    excludedArticleId: article.id,
  };

  return (
    <>
      <Nav hideButtons white />
      <RelatedPostSummary article={article} />
      <div className="flex flex-col items-center pb-8">
        <RelatedList relatesParam={relatesParam} />
      </div>
    </>
  );
};

export default Relates;
