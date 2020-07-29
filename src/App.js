import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import logo from "./assets/logo.png";
import Categorie from "./components/Categorie";
import EmptyCart from "./components/EmptyCart";
import CartToFill from "./components/CartToFill";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-app-backend.herokuapp.com/"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="App">
      <div className="header">
        <div className="container">
          <img alt="logo" src={logo} />
        </div>
        <div className="line"></div>
      </div>
      <div className="container">
        <div className="restoTitle">
          <div>
            <h2>{data.restaurant.name}</h2>
            <p>{data.restaurant.description}</p>
          </div>
          <div>
            <img src={data.restaurant.picture} alt={data.restaurant.path} />
          </div>
        </div>
      </div>
      <div className="greyBG">
        <div className="content">
          {data.categories.map((categorie, index) => {
            return (
              <Categorie
                name={categorie.name}
                meals={categorie.meals}
                cart={cart}
                setCart={setCart}
              />
            );
          })}

          {!cart.length ? (
            <EmptyCart />
          ) : (
            <CartToFill cart={cart} setCart={setCart} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
