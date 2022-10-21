const createParagraph = (text) => {
  const paragraph = document.createElement("p");
  paragraph.classList.add(
    "font-base",
    "my-2",
    "text-sm",
    "text-black-gp-100",
    "lg:text-base"
  );
  paragraph.textContent = `${text}.`;

  return paragraph;
};

const formatPublishedDate = (postDate) => {
  const publishedDate = new Date(postDate).toLocaleDateString("id-Id", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return publishedDate;
};

const createArticleUrl = (id) => {
  const { href } = window.location;
  const params = new URLSearchParams();

  params.append("article_id", id);

  return `${href}artikel/index.html?${params}`;
};

export const updateArticleContent = (currentArticleNumber, articleData) => {
  const articleTitleElement = document.querySelector("#article-title");
  const articleAuthorElement = document.querySelector("#article-author");
  const articleDateElement = document.querySelector("#article-date");
  const articleLinkElement = document.querySelector("#article-link");
  const articleDescriptionContainer = document.querySelector(
    "#article-description"
  );
  const articleImageElement = document.querySelector("#article-image");
  const articleCurrentNumberElement = document.querySelector(
    "#current-article-number"
  );

  const { id, title, authorName, imageUrl, postDate, postDescription } =
    articleData;

  createArticleUrl(id);

  articleImageElement.src = imageUrl;
  articleCurrentNumberElement.textContent = currentArticleNumber;
  articleDescriptionContainer.innerHTML = "";
  articleTitleElement.textContent = title;
  articleAuthorElement.textContent = authorName;

  articleLinkElement.href = createArticleUrl(id);
  articleDateElement.textContent = formatPublishedDate(postDate.split(" ")[0]);

  postDescription.split(".").forEach((text) => {
    if (text) articleDescriptionContainer.appendChild(createParagraph(text));
  });
};