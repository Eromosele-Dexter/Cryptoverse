import React from "react";
import "./home.scss";
import { Loader, Stat } from "../../components";
import Cryptocurrencies from "../cryptocurrencies/Cryptocurrencies";
import News from "../news/News";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const Home = () => {
  const numberOfCryptos = 10;
  const { data, isFetching } = useGetCryptosQuery(numberOfCryptos);
  const coinStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <div className="Home">
      <h1 className="heading">Global Crypto Stats</h1>
      <div className="stats">
        <Stat header={"Total Cryptocurrencies"} value={coinStats?.total} />
        <Stat header={"Total Exchanges"} value={coinStats?.totalExchanges} />
        <Stat header={"Total Market Cap"} value={coinStats?.totalMarketCap} />
        <Stat header={"Total 24h Volume"} value={coinStats?.total24hVolume} />
        <Stat header={"Total Coins"} value={coinStats?.totalCoins} />
        <Stat header={"Total Markets"} value={coinStats?.totalMarkets} />
      </div>

      <div className="header">
        <h2>Top 10 Cryptos In The World</h2>
        <a href="/cryptocurrencies">Show More</a>
      </div>

      <div className="cryptos">
        <Cryptocurrencies showAll={false} />
      </div>

      <div className="header">
        <h2>Latest Crypto News</h2>
        <a href="/news">Show More</a>
      </div>

      <div className="news">
        <News showAll={false} />
      </div>
    </div>
  );
};

export default Home;
