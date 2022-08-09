import React from "react";
import "./cryptocurrencies.scss";
import { CryptoCard, Loader } from "../../components";

import { v4 as uuidv4 } from "uuid";
import { useFetchCryptos } from "../../services/customHook";
import { useGetCryptosQuery } from "../../services/cryptoApi";

const Cryptocurrencies = ({ showAll }) => {
  let limit = 10;
  showAll = showAll || false;
  showAll ? (limit = 100) : (limit = 10);

  // const { loading, coins } = useFetchCryptos(limit); // fetching real time
  const { data: cryptosList, isFetching } = useGetCryptosQuery(limit); // not fetching real time
  // const coins = cryptosList?.data?.coins;

  if (isFetching) return <Loader />;

  return (
    <div className="Cryptocurrencies">
      <ul>
        {cryptosList?.data?.coins.map((crypto) => {
          return (
            <li key={uuidv4()}>
              <a href={`/crypto/${crypto.uuid}`}>
                <CryptoCard {...crypto} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cryptocurrencies;
