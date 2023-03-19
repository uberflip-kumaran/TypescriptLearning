import { useState, useEffect } from "react";
import paginate from "./utils";
import { FollowerProps } from "./types";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any | null>([]);

  const getProducts = async () => {
    console.log(paginate);
    const response = await fetch(url);
    const data = await response.json();
    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};
