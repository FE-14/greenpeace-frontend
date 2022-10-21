import { formatPublishedDate } from "./formatPublishedDate.js";
import { createArticleUrl } from "./createArticleUrl.js";

const createArticleCard = (articleData, index) => {
  const { title, authorName, postDescription, tags, postDate, id, imageUrl } =
    articleData;

  const section = document.createElement("section");
  section.id = id;
  section.classList.add(
    "mb-5",
    "mt-5",
    "flex",
    "flex-col",
    "gap-4",
    "px-6",
    "lg:flex-row",
    "lg:items-center",
    "lg:justify-center"
  );

  section.innerHTML = `
  <img
          src="${imageUrl}"
          alt="Article Cover"
          class="mt-4 min-w-[600px] max-w-[600px] min-h-[400px] max-h-[400px] bg-cover object-cover shadow-lg sm:mt-6 sm:object-cover sm:object-center  ${
            index % 2 === 0 && "lg:order-2"
          }"
        />
        <div class="flex flex-col justify-between gap-4 lg:w-[40%] lg:p-4">
          <div class="flex flex-col gap-2">
            <a href="${createArticleUrl(id)}">
            <h2
              class="font-montserrat text-xl font-bold text-submarine-gp-500 sm:text-lg md:text-2xl lg:text-3xl"
            >
              ${title}
            </h2></a>
            <div class="">
              <h3
                class="font-source-sans-pro text-xs text-black-gp-100 lg:text-sm"
              >
                ${authorName}
              </h3>
              <h6 class="text-xs text-slate-500">${formatPublishedDate(
                postDate.split(" ")[0]
              )}</h6>
            </div>
          </div>
          <div class="flex items-center flex-wrap gap-2">
          ${tags
            .map((tag) => {
              return `
              <span class="w-max bg-slate-200 p-2 text-xs text-slate-500">
            ${tag}
          </span>
              `;
            })
            .join("")}
          </div>
          <p class="font-source-sans-pro text-base font-medium sm:mt-5">
            ${postDescription}
          </p>
        </div>
  `;

  return section;
};

export const renderArticleCard = (articleData, index) => {
  const mainElement = document.querySelector("main");

  mainElement.appendChild(createArticleCard(articleData, index));
};
