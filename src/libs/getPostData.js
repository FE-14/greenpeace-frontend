import axios from "axios";

export default async function getPostData(URL) {
  const response = await axios(URL);
  const data = await response.data;

  return data;
}
