import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <HomeOutlined />,
  },
  {
    id: 2,
    url: "/cryptocurrencies",
    text: "Cryptocurrencies",

    icon: <FundOutlined />,
  },
  {
    id: 3,
    url: "/exchanges",
    text: "Exchanges",
    icon: <MoneyCollectOutlined />,
  },
  {
    id: 4,
    url: "/news",
    text: "News",
    icon: <BulbOutlined />,
  },
];
