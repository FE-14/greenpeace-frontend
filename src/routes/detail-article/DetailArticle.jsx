import { useParams } from "react-router-dom";

import { getDetailPostData } from "../../libs";

export default function DetailArticle() {
  const URL = import.meta.env.VITE_POSTS_API_1;

  const { articleId } = useParams();

  const { postData, isLoading, isError } = getDetailPostData(
    `${URL}/${articleId}`
  );

  console.log({ postData, isLoading, isError });

  return (
    <section className="mx-auto mt-20 md:w-10/12 lg:w-1/2">
      <article>Data disini</article>
    </section>
  );
}
