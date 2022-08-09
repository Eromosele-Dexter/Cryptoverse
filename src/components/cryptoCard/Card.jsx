import millify from "millify";
import React from "react";
import "./card.scss";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const Card = ({ rank, name, price, marketCap, change, iconUrl }) => {
  const dailyChangeStyle = {
    color: change > 0.0 ? "green" : "red",
    fontWeight: "500",
  };

  return (
    <div className="crypto-card">
      <div className="title">
        <span className="heading"> {`${rank}. ${name}`}</span>

        {<img src={iconUrl} alt="crypto-icon" />}
      </div>

      <div className="card-body">
        <p style={{ letterSpacing: "0.1rem" }}>
          Price: ${(Math.round(price * 100) / 100).toLocaleString("en-US")}
        </p>

        <p>
          Market Cap: ${millify(marketCap)}{" "}
          {change > 0 ? (
            <BsArrowUpShort style={dailyChangeStyle} />
          ) : (
            <BsArrowDownShort style={dailyChangeStyle} />
          )}
        </p>
        <p className="change">
          Daily Change: <span style={dailyChangeStyle}>{`${change}%`}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
