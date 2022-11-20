import { useParams } from "react-router-dom";

import { getDetailPostData } from "../../libs";

import { Article, DetailArticleSkeleton } from "./components";

export default function DetailArticle() {
  const URL = import.meta.env.VITE_POSTS_API_1;

  const { articleId } = useParams();

  const { postData, isLoading } = getDetailPostData(`${URL}/${articleId}`);

  return (
    <section className="basic-padding mx-auto mt-20 py-8 md:w-10/12 lg:w-2/3">
      {isLoading && <DetailArticleSkeleton />}
      {!isLoading && Object.entries(postData).length && (
        <Article {...postData} />
      )}
    </section>
  );
}
