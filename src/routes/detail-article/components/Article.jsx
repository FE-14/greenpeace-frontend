import parse from "html-react-parser";

import { formatPublishedDate } from "../../../libs";

import ArticleTag from "./ArticleTag";

export default function Article({
  id,
  title,
  authorName,
  postDate,
  postDescription,
  imageUrl,
  tags,
  postContent,
}) {
  return (
    <article>
      <div id="detail-wrapper" className="my-6">
        <h1
          id="blog-title"
          className="mb-6 font-montserrat text-2xl font-bold text-black-gp-100 lg:text-4xl"
        >
          {title}
        </h1>
        <div id="blog-detail" className="mb-14 font-source-sans-pro">
          <p id="blog-author" className="text-lg font-bold text-black-gp-100">
            {authorName}
          </p>
          <p id="blog-postdate" className="text-black-gp-secondary-black-100">
            {formatPublishedDate(postDate)}
          </p>
        </div>
        <p id="blog-desc" className="my-6 mb-16 font-source-sans-pro text-lg">
          {postDescription}
        </p>
        <img
          id="blog-img"
          src={imageUrl}
          alt={`${title} Cover`}
          className="my-6 w-full bg-cover object-cover"
        />
        <div
          id="blog-content"
          className="my-6 flex flex-col gap-8 font-source-sans-pro text-lg"
        >
          {parse(`${postContent}`)}
        </div>

        <div
          className="my-20 flex flex-col gap-3 text-sm text-black-gp-secondary-black-100"
          id="blog-writer"
        >
          <h3 className="text-lg font-medium">Ditulis oleh:</h3>
          <h2 className="text-2xl font-bold text-black-gp-100">{authorName}</h2>
          <div
            id="tags-wrapper"
            className="my-8 flex gap-6 font-source-sans-pro"
          >
            {tags.map((tag) => (
              <ArticleTag key={`${tag}-${id}`}>{tag}</ArticleTag>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
