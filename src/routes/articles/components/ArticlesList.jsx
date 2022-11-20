import { memo } from "react";

import { ArticleCard } from "../../../components";

export default memo(function ArticlesList({ postData, defaultLayout = false }) {
  return postData.map((post, index) => (
    <ArticleCard key={post.id} index={defaultLayout ? 1 : index} {...post} />
  ));
});
