import React from "react";
import { Slide } from "react-slideshow-image";

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrow: true,
  autoplay: false
};

const SlideshowMedium = ({
  title,
  price,
  description,
  reference,
  link,
  images = [
    "/images/arbres/arbre01.jpeg",
    "/images/arbres/arbre01.jpeg",
    "/images/arbres/arbre01.jpeg",
    "/images/arbres/arbre01.jpeg",
    "/images/arbres/arbre01.jpeg",
    "/images/arbres/arbre01.jpeg"
  ]
}) => {
  return (
    <div className="containerSlide">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="price">
          {link}
          <br/>
          {price}
          <br/>
          <br/>
        </p>
        <Slide {...proprietes}>
          {images.map((each, index) => (
            <img key={index} src={each} alt="arbre de vie" />
          ))}
        </Slide>
        <div className="description">
          {description}

          <p>{link}</p>
          <p id="reference">Référence: {reference}</p>
        </div>
      </div>
    </div>
  );
};

export default SlideshowMedium;
