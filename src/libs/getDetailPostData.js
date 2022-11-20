import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function useGetDetailPost(URL) {
  const [postData, setPostData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getPostData = useCallback(async () => {
    try {
      const response = await axios.get(URL);

      if (response.status !== 200) {
        throw new Error();
      }

      const data = await response.data;

      setPostData(data);
    } catch (error) {
      console.error(error.message);
      setIsError(true);
      setPostData({});
    } finally {
      setIsLoading(false);
    }
  }, [URL]);

  useEffect(() => {
    getPostData();
  }, [getPostData, URL]);

  return { postData, isLoading, isError };
}
