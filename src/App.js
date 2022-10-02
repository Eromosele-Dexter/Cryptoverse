import React from "react";
import { Cryptocurrencies, Exchanges, Home, News } from "./containers";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navbar, CryptoDetails, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <section className="navbar-section">
        <Navbar />
      </section>

      <section className="main">
        <div className="main-container">
          <div className="routes">
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Cryptoverse" element={<Home />} />
                <Route exact path="/exchanges" element={<Exchanges />} />
                <Route
                  exact
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies showAll={true} />}
                />
                <Route
                  exact
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                />
                <Route exact path="/news" element={<News />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
};

export default App;
