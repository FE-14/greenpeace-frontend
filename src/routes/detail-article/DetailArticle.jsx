import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { useGetDetailPost } from "../../hooks";

import { Article, DetailArticleSkeleton } from "./components";

export default function DetailArticle() {
  const URL = import.meta.env.VITE_POSTS_API_1;

  const { articleId } = useParams();

  const { postData, isLoading } = useGetDetailPost(`${URL}/${articleId}`);

  return (
    <>
      <Helmet>
        <title>{postData?.title || "Article"} | Greenpeace IOndonesia</title>

        <meta
          name="title"
          content={postData?.title || "Artikel Greenpeace Indonesia"}
        />
        <meta name="description" content={postData?.postDescription} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greenpeace.netlify.app/" />
        <meta
          property="og:title"
          content={postData?.title || "Artikel Greenpeace Indonesia"}
        />

        <meta property="og:description" content={postData?.postDescription} />
        <meta
          property="og:image"
          content={postData?.imageUrl || "/greenpeace-indonesia-home.png"}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://twitter.com/greenpeaceid"
        />
        <meta property="twitter:title" content="Greenpeace Indonesia" />
        <meta
          property="twitter:description"
          content={postData?.postDescription}
        />
        <meta
          property="twitter:image"
          content={postData?.imageUrl || "/greenpeace-indonesia-home.png"}
        />
      </Helmet>

      <section className="basic-padding mx-auto mt-20 py-8 md:w-10/12 lg:w-2/3">
        {isLoading && <DetailArticleSkeleton />}
        {!isLoading && Object.entries(postData).length && (
          <Article {...postData} />
        )}
      </section>
    </>
  );
}
