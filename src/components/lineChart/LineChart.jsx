import React, { useEffect, useState } from "react";
import "./lineChart.scss";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const [windowSize, setWindowSize] = useState(getWindowWidth());
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowWidth());
    }
    if (windowSize < 550) {
      setShow(true);
    } else {
      setShow(false);
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  function getWindowWidth() {
    const { innerWidth } = window;
    return innerWidth;
  }

  const coinPrice = [];
  const coinTimestamp = [];

  const numberOfDataPoints = 10;
  const length = coinHistory?.data?.history?.length;
  const increments = Math.ceil(length / numberOfDataPoints);

  for (let i = length - 1; i > 0; i -= increments) {
    let price = coinHistory?.data?.history[i]?.price;
    if (price === "NULL") {
      price = 0;
    }
    coinPrice.push(price);
  }
  coinPrice.push(coinHistory?.data?.history[0]?.price);

  for (let i = length - 1; i > 0; i -= increments) {
    coinTimestamp.push(
      new Date(
        coinHistory?.data?.history[i].timestamp * 1000
      ).toLocaleDateString()
    );
  }

  coinTimestamp.push(
    new Date(
      coinHistory?.data?.history[0].timestamp * 1000
    ).toLocaleDateString()
  );

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    maintainAspectRatio: !show,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const dailyChangeStyle = {
    color: coinHistory?.data?.change > 0.0 ? "green" : "red",
    fontWeight: "900",
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change:{" "}
            <span style={dailyChangeStyle}>{coinHistory?.data?.change}%</span>
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price:{" "}
            <span style={{ color: "green", fontWeight: "900" }}>
              $ {currentPrice}
            </span>
          </Title>
        </Col>
      </Row>
      {(show && (
        <div className="chart-box">
          <Line data={data} options={options} />
        </div>
      )) ||
        (!show && <Line data={data} options={options} />)}
    </>
  );
};

export default LineChart;
