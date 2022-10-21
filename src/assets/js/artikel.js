import {
  getArticlePostData,
  renderArticleCard,
  useState,
} from "./modules/index.js";

const API_URL = "https://634c1520317dc96a3090f23c.mockapi.io/greenpeace/api/v1";
let [articlePostDataPromise] = useState(getArticlePostData(`${API_URL}/posts`));

articlePostDataPromise.then((data) => {
  data.forEach((articleData, index) => {
    renderArticleCard(articleData, index);
  });
});
