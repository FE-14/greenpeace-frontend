import { useSearchParams } from "react-router-dom";

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("category"));
  return <h1>Articles</h1>;
}
