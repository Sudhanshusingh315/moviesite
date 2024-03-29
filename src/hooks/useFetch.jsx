import { useEffect, useState } from "react";
import { fetchingApi } from "../utils/api";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    fetchingApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(`Something went wrong! ${err.message}`);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
