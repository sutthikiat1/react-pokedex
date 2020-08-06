import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [response, setResponse] = React.useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fn = async () => {
      try {
        console.log(url);
        const res = await axios.get(url);
        setResponse(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fn();
  }, [url]);
  return { isLoading, response, error };
};

export default useFetch;
