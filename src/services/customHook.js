import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCryptos = (limit) => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const options = {
    method: "GET",
    url: process.env.REACT_APP_CRYPTO_API_URL + "/coins",
    params: { limit: limit },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    },
  };

  useEffect(() => {
    const getCoins = async () => {
      return await axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          setCoins(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getCoins();
  });

  return { loading, coins };
};

export const useFetchCryptoNews = (category, date) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const options = {
    method: "GET",
    url: "https://google-news.p.rapidapi.com/v1/search",
    params: { q: category, country: "US", from: date, lang: "en" },
    headers: {
      "X-RapidAPI-Key": "d7c149516fmshd695bda40c7540fp19e051jsnfd11c488f1b2",
      "X-RapidAPI-Host": "google-news.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getCoins = async () => {
      return await axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          setArticles(response.data.articles);
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getCoins();
  }, []);

  return { loading, articles };
};
