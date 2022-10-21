import {
  getArticlePostData,
  updateArticleContent,
  useState,
} from "./modules/index.js";

// Handle close and open navbar when screen < lg (Tailwind Brekpoints)
const buttonCloseSidebarElement = document.querySelector("#btn-close-sidebar");
const buttonMenuElement = document.querySelector("#btn-open-navbar");
const navbarElement = document.querySelector("nav");

buttonMenuElement.addEventListener("click", () => {
  navbarElement.classList.remove("-top-[100vh]");
  navbarElement.classList.add("top-0");
  document.body.classList.add("overflow-y-hidden");
});

buttonCloseSidebarElement.addEventListener("click", () => {
  navbarElement.classList.add("-top-[100vh]");
  navbarElement.classList.remove("top-0");
  document.body.classList.remove("overflow-y-hidden");
});

// Handle article controls
const API_URL = "https://634c1520317dc96a3090f23c.mockapi.io/greenpeace/api/v1";
const totalArticleElement = document.querySelector("#total-article");
const nextArticleButton = document.querySelector("#next-article-button");
const prevArticleButton = document.querySelector("#prev-article-button");
const articleWrapper = document.querySelector("#article-wrapper");

let [currentArticleNumber, setCurrentArticleNumber] = useState(1);
let [articlePostDataPromise] = useState(getArticlePostData(`${API_URL}/posts`));

articlePostDataPromise.then((data) => {
  totalArticleElement.textContent = data.length;
  updateArticleContent(currentArticleNumber, data[currentArticleNumber - 1]);
  articleWrapper.classList.add("flex");
  articleWrapper.classList.remove("hidden");
});

nextArticleButton.addEventListener("click", () => {
  currentArticleNumber = setCurrentArticleNumber(
    (currentArticleNumber) => currentArticleNumber + 1
  );

  if (currentArticleNumber === Number(totalArticleElement.textContent)) {
    nextArticleButton.setAttribute("disabled", true);
  }

  if (prevArticleButton.hasAttribute("disabled")) {
    prevArticleButton.removeAttribute("disabled");
  }

  articlePostDataPromise.then((data) => {
    updateArticleContent(currentArticleNumber, data[currentArticleNumber - 1]);
  });
});

prevArticleButton.addEventListener("click", () => {
  currentArticleNumber = setCurrentArticleNumber(
    (currentArticleNumber) => currentArticleNumber - 1
  );

  if (currentArticleNumber === 1) {
    prevArticleButton.setAttribute("disabled", true);
  }

  if (nextArticleButton.hasAttribute("disabled")) {
    nextArticleButton.removeAttribute("disabled");
  }

  articlePostDataPromise.then((data) => {
    updateArticleContent(currentArticleNumber, data[currentArticleNumber - 1]);
  });
});
