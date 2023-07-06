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
  const response = await axios
    .get(`${URL_API}/${params.slug}`)
    .then((res) => res.data)
    .catch((e) => e.response);

  if (response.status == "404") notFound();

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
    .get(URL_API)
    .then((res) => res.data)
    .catch((e) => e.response);

  return data.data.map((d: TArticleData) => ({
    slug: d.slug,
  }));
}

export default Slug;
