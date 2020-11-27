import React, { useState } from "react";
import "./Onglets.css";
import "./Slide.css";

import Slideshow from "./Slide";
import SlideshowMedium from "./SlideMedium";
import SlideshowSmall from "./SlideSmall";

import products from "./ProductsBig";
import productsMedium from "./ProductsMedium";
import productsSmall from "./ProductsSmall";

export default function Onglets() {
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
    <div className="contain">
      <div className="contBtn">
        <div
          onClick={goGD}
          className={`onglets ${stateOnglets === 1 ? "active" : ""}`}
        >
          {" "}
          <h1>Grands Modèles</h1>
        </div>
        <div
          onClick={goM}
          className={`onglets ${stateOnglets === 2 ? "active" : ""}`}
        >
          <h1>Moyens modèles</h1>
        </div>
        <div
          onClick={goS}
          className={`onglets ${stateOnglets === 3 ? "active" : ""}`}
        >
          <h1>Petits modèles</h1>
        </div>
      </div>
      <div className="container">
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
  );
}
