import { ArticleCard } from "../../../components";

export default function ArticlesList({ postData }) {
  return postData.map((post, index) => (
    <ArticleCard key={post.id} index={index} {...post} />
  ));
}
