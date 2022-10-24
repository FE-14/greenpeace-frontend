import { renderArticleCard } from "./renderArticleCard.js";

export const filterArticlesByCategory = (articleData, selectedTag) => {
  const sectionElement = document.querySelector("section#article-list");
  sectionElement.innerHTML = "";
  let index = 1;

  articleData.forEach((article) => {
    sectionElement.classList.remove("h-96", "items-center", "justify-center");

    if (selectedTag === "semua") {
      index += 1;
      renderArticleCard(article, index);
      return;
    }

    if (article.tags.includes(selectedTag)) {
      index += 1;
      renderArticleCard(article, index);
    }
  });

  if (index === 1) {
    sectionElement.classList.add("h-96", "items-center", "justify-center");
    sectionElement.innerHTML = `
        <article class"my-4 flex gap-4 px-6 py-96 items-center justify-center h-[300px]">
            <h2 class="text-center font-bold text-xl xl:text-2xl text-black-gp-100">Tidak ada artikel yang sesuai.</h2>
        </article>
        `;
  }
};
