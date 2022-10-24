import {
  useState,
  getArticlePostData,
  renderArticleCard,
} from "./modules/index.js";

const params = new URLSearchParams(window.location.search);
const windowLocation = window.location;
const initailQueryParamsValue = params.get("q");

if (initailQueryParamsValue === null) {
  params.append("q", "");
  window.location.href = `${
    windowLocation.origin
  }/search/index.html?${params.toString()}`;
}

if (windowLocation.pathname !== "/search/index.html") {
  window.location.href = `${
    windowLocation.origin
  }/search/index.html?${params.toString()}`;
}

// Update search page content
const searchResultTitle = document.querySelector("#search-result");
const formElement = document.querySelector("form");
const searchFieldElement = document.querySelector("input#search-field");
const sectionElement = document.querySelector("section#article-list");
let [searchvalue, setSearchValue] = useState("");

const API_URL = "https://634c1520317dc96a3090f23c.mockapi.io/greenpeace/api/v1";

let [articlePostDataPromise] = useState(getArticlePostData(`${API_URL}/posts`));

articlePostDataPromise.then((data) => {
  sectionElement.classList.remove("h-96", "items-center", "justify-center");

  const filteredData = data.filter((article) => {
    if (article.title.toLowerCase().includes(initailQueryParamsValue)) {
      return article;
    }
  });

  searchFieldElement.value = initailQueryParamsValue;
  formElement.classList.remove("hidden");
  formElement.classList.add("flex");

  searchResultTitle.textContent = `${filteredData.length} hasil untuk pencarian '${initailQueryParamsValue}'`;

  if (filteredData.length) {
    filteredData.forEach((article) => {
      renderArticleCard(article, 1);
    });
  } else {
    sectionElement.classList.add("h-96", "items-center", "justify-center");
    sectionElement.innerHTML = `
        <article class"my-4 flex gap-4 px-6 py-96 items-center justify-center h-[300px]">
            <h2 class="text-center font-bold text-xl xl:text-2xl text-black-gp-100">Tidak ada artikel yang sesuai.</h2>
        </article>
        `;
  }
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!searchvalue) {
    return;
  }

  params.set("q", searchvalue);
  windowLocation.search = params.toString();
});

searchFieldElement.addEventListener("change", (event) => {
  const { value } = event.target;

  searchvalue = setSearchValue(() => value);
});
