import { fetcher, useSWR } from "../libs";

export default function useGetDetailPost(URL) {
  const { data, error } = useSWR(URL, fetcher);

  return {
    postData: data,
    isLoading: !error && !data,
    isError: error,
  };
}
