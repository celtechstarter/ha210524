import "../styles/Listing.css";
import React from "react";

import katze1 from "../img/katze1.jpg";
import katze2 from "../img/katze2.jpg";
import katze3 from "../img/katze3.jpg";
import katze4 from "../img/katze4.jpg";
import katze5 from "../img/katze5.jpg";
import katze6 from "../img/katze6.jpg";

const imageMap = {
  "katze1.jpg": katze1,
  "katze2.jpg": katze2,
  "katze3.jpg": katze3,
  "katze4.jpg": katze4,
  "katze5.jpg": katze5,
  "katze6.jpg": katze6,
};

const Listing = ({ name, alter, imageName }) => {
  const imageSrc = imageMap[imageName];

  return (
    <div>
      <h2>{name}</h2>
      <p>Alter: {alter}</p>
      <img src={imageSrc} alt={name} className="katzenbild" />
    </div>
  );
};

export default Listing;
