export const createArticleUrl = (id) => {
  const { origin } = window.location;
  const params = new URLSearchParams();

  params.append("article_id", id);

  return `${origin}/blog/index.html?${params}`;
};
