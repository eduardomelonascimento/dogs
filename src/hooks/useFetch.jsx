import { useCallback, useState } from "react";

export default function useFetch() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const request = useCallback(async (url, options) => {
    let response, json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) throw new Error(json.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return {response, json};
    }
  }, []);

  return { data, error, loading, request };
}
