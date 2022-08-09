import moment from "moment";
import React from "react";
import "./card.scss";

const Card = ({ title, link, published }) => {
  const titleArray = title.split(" - ");

  const time = moment(published).startOf("ss").fromNow();

  return (
    <div className="news-card">
      {/* ADD SHOW MORE AND SHOW LESS FEATURE TO CARD TITLE  */}
      <div className="title">
        <a href={link}>
          {/* <p>
            Counterview: Why Cryptocurrency is a Kardashian, Not Mareyl Steep
          </p> */}
          <p>{titleArray[0]}</p>
        </a>
      </div>

      <div className="card-body">
        <div className="card-footer">
          <span>
            {/* <p>CNN News18 on MSN</p> */}
            <p>{titleArray[1]}</p>
          </span>
          {/* <p>2 hours ago</p> */}
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
