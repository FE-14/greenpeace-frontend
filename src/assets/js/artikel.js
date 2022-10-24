import {
  getArticlePostData,
  renderArticleCard,
  useState,
  updateSelectedTagButtons,
  filterArticlesByTitle,
} from "./modules/index.js";

const API_URL = "https://634c1520317dc96a3090f23c.mockapi.io/greenpeace/api/v1";
let [articlePostDataPromise] = useState(getArticlePostData(`${API_URL}/posts`));

// handle first render articles
articlePostDataPromise.then((data) => {
  data.forEach((articleData, index) => {
    renderArticleCard(articleData, index);
  });
});

// handle filter articles by selected tag (category)
let [selectedTag, setSelectedtag] = useState("semua");
const buttonsTag = document.querySelectorAll("button[data-tag]");

updateSelectedTagButtons(buttonsTag, selectedTag);

buttonsTag.forEach((button) => {
  button.addEventListener("click", (event) => {
    selectedTag = setSelectedtag(() => event.target.dataset.tag);
    updateSelectedTagButtons(buttonsTag, selectedTag);

    articlePostDataPromise.then((articleData) => {
      filterArticlesByCategory(articleData, selectedTag);
    });
  });
});

// handle search the article title using search bar
const form = document.querySelector("form#search-article-form");
const searchArticleTitleField = document.querySelector("#search-article-title");
let [searchValue, setSearchValue] = useState("");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  articlePostDataPromise.then((articleData) => {
    filterArticlesByTitle(articleData, searchValue);
  });
});

searchArticleTitleField.addEventListener("change", (event) => {
  const { value } = event.target;
  searchValue = setSearchValue(() => value);
});
