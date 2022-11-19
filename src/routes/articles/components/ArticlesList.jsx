import { memo } from "react";

import { ArticleCard } from "../../../components";

export default memo(function ArticlesList({ postData }) {
  return postData.map((post, index) => (
    <ArticleCard key={post.id} index={index} {...post} />
  ));
});
