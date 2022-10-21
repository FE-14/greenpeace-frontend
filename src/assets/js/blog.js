import {
  useState,
  getArticlePostData,
  createTagElements,
  formatPublishedDate,
} from "./modules/index.js";

const API_URL = "https://634c1520317dc96a3090f23c.mockapi.io/greenpeace/api/v1";
const id = window.location.search.split("=")[1];

const blogTitleElement = document.querySelector("#blog-title");
const blogAuthorElement = document.querySelector("#blog-author");
const blogWriterElement = document.querySelector("#blog-writer");
const blogPostdateElement = document.querySelector("#blog-postdate");
const blogDescElement = document.querySelector("#blog-desc");
const blogImgElement = document.querySelector("#blog-img");
const blogTagsElement = document.querySelector("#tags-wrapper");
const blogContentElement = document.querySelector("#blog-content");

let [articlePostDataPromise] = useState(
  getArticlePostData(`${API_URL}/posts/${id}`)
);

articlePostDataPromise.then((data) => {
  console.log(data);
  blogTitleElement.textContent = data.title;
  blogAuthorElement.textContent = data.authorName;
  blogWriterElement.textContent = data.authorName;
  blogPostdateElement.textContent = formatPublishedDate(data.postDate);
  blogDescElement.textContent = data.postDescription;
  blogTagsElement.innerHTML = createTagElements(data.tags);
  blogImgElement.src = data.imageUrl;
  blogContentElement.innerHTML = data.postContent;
});
