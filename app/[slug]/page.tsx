import axios from "axios";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import PostDetail from "@/components/PostDetail";
import RelatedSection from "@/components/RelatedSection";
import { URL_API } from "@/constants/URL";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandbox HSI Next.js Level 4 - Blog",
};

const Slug = async ({ params }: { params: { slug: string } }) => {
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

  return (
    <>
      <Nav hideButtons white />
      <Suspense fallback={<div>Loading PostDetail and RelatedSection</div>}>
        <PostDetail article={article} />
        <RelatedSection article={article} />
      </Suspense>
    </>
  );
};

export async function generateStaticParams() {
  const data = await axios
    .get(URL_API, { params: { perPage: 100 } })
    .then((res) => res.data)
    .catch((e) => e.response);

  return data.data.map((d: TArticleData) => ({
    slug: d.slug,
  }));
}

export default Slug;
