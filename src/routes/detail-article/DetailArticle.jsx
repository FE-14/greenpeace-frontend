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
      <article>
      <div id="detail-wrapper" class="my-6">
  <h1
    id="blog-title"
    class="mb-6 font-montserrat text-2xl font-bold text-black-gp-100 lg:text-4xl"
  >{postData.title}</h1>
  <div id="blog-detail" class="font-source-sans-pro">
    <p id="blog-author" class="text-sm font-bold text-black-gp-100">{postData.authorName}</p>
    <p id="blog-postdate" class="text-black-gp-secondary-black-100">{postData.postDate}</p>
  </div>
</div>

<img id="blog-img" class="my-6 w-full object-cover" src={postData.imageUrl} />
<p
  id="blog-content"
  class="my-6 flex flex-col gap-4 font-source-sans-pro text-lg"
>{postData.postContent}</p>

      </article>
    </section>
  );
}
