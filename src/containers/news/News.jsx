import React, { useState } from "react";
import "./news.scss";
import Card from "../../components/newsCard/Card";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { Loader } from "../../components";
import { v4 as uuidv4 } from "uuid";
import { useFetchCryptoNews } from "../../services/customHook";

const News = ({ showAll }) => {
  const [category, setCategory] = useState("Cryptocurrency"); // for search crypto feature
  const { data } = useGetCryptosQuery(100); // for search crypto feature
  const now = new Date();

  const firstDayOfMonth = new Date(
    now.getFullYear(),
    now.getMonth(),
    1
  ).toISOString();

  const extractedDate = firstDayOfMonth.slice(0, 10);

  const { articles, loading } = useFetchCryptoNews(category, extractedDate);

  const value = showAll ? 12 : 6;

  if (loading) return <Loader />;

  return (
    <div className="News">
      {!loading &&
        articles.slice(0, value).map((news) => {
          return <Card key={uuidv4()} {...news} />;
        })}
    </div>
  );
};

export default News;
