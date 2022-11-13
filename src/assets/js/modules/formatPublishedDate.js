export const formatPublishedDate = (postDate) => {
  const publishedDate = new Date(postDate).toLocaleDateString("id-Id", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return publishedDate;
};
