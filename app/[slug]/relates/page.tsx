import axios from "axios";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import RelatedList from "@/components/RelatedList";
import RelatedPostSummary from "@/components/RelatedPostSummary";
import { URL_API } from "@/constants/URL";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandbox HSI Next.js Level 4 - Blog",
};

const Relates = async ({ params }: { params: { slug: string } }) => {
  let response: TArticleDetail;
  try {
    response = await axios
      .get<TArticleDetail>(`${URL_API}/${params.slug}`)
      .then((res) => res.data);
  } catch (error: any) {
    if (error.response.status == "404") notFound();
    else throw error;
  }

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
