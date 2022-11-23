import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export { fetcher, useSWR };
