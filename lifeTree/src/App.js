import React, { useState } from "react";
import "./styles.css";

import "./components/Slideshow.css";

import Slideshow from "./components/Slideshow";

import products from "./components/ProductsBig";
import productsMedium from "./components/ProductsMedium";
import productsSmall from "./components/ProductsSmall";

export default function App() {
  const [stateOnglets, setStateOnglets] = useState(1);

  const goGD = () => {
    setStateOnglets(1);
  };

  const goM = () => {
    setStateOnglets(2);
  };

  const goS = () => {
    setStateOnglets(3);
  };
  return (
    <div className="App">
      <h1><img src="http://www.milhiecreation.com/images/ico_epingle.png" alt="epingle"/> Arbres de vie</h1>
      <div className="contain">
        <div className="contBtn">
          <div
            onClick={goGD}
            className={`buttonLeft onglets ${stateOnglets === 1 ? "active" : ""}`}
          >
            {" "}
            <h1 className="titleState">Grands Modèles</h1>
          </div>
          <div
            onClick={goM}
            className={`buttonCenter onglets ${stateOnglets === 2 ? "active" : ""}`}
          >
            <h1 className="titleState">Moyens modèles</h1>
          </div>
          <div
            onClick={goS}
            className={`buttonRight onglets ${stateOnglets === 3 ? "active" : ""}`}
          >
            <h1 className="titleState">Petits modèles</h1>
          </div>
        </div>
        <div className="container panel">
          {stateOnglets === 1 ? (
            <div className="cont">
              <section className="slideshow">
                {products.map((product) => (
                  <Slideshow
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    link={product.link}
                    reference={product.reference}
                    images={product.images}
                  />
                ))}
              </section>
            </div>
          ) : stateOnglets === 2 ? (
            <div className="cont">
              <section className="slideshowMedium">
                {productsMedium.map((product) => (
                  <Slideshow
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    link={product.link}
                    reference={product.reference}
                    images={product.images}
                  />
                ))}
              </section>
            </div>
          ) : (
            <div className="cont">
              <section className="slideshowSmall">
                {productsSmall.map((product) => (
                  <Slideshow
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    link={product.link}
                    reference={product.reference}
                    images={product.images}
                  />
                ))}
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
