import millify from "millify";
import React from "react";
import "./stats.scss";

const Stats = ({ header, value }) => {
  return (
    <div className="Stat">
      <h4>{header}</h4>

      <p>
        {header.match(/^Total Cryptocurrencies$/) === null
          ? millify(value === undefined ? 0 : Number(value))
          : value}
      </p>
    </div>
  );
};

export default Stats;
