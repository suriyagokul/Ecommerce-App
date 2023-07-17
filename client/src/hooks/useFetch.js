import { useEffect, useState } from "react";
import axios from "axios";
import { makeRequest } from "../axiosInstance/makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setErr] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        console.log(JSON.stringify(res));
        setData(res.data.data);
      } catch (error) {
        setErr(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
