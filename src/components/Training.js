import React from "react";
import "./TrainingStyles.css";
import { Link } from "react-router-dom";
import Pod from "../assets/8.png";
import Moon from "../assets/6.png";
import Mon from "../assets/10.png";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h2>Oświecenie w litaraturze polskiej</h2>
        <p>Ignacy Krasicki (1735-1801)</p>
        <p>Wojciech Bogusławski (1757–1829)</p>
        <p>Franciszek Bohomolec (1720–1784)</p>
        <p>Franciszek Salezy Jezierski (1740–1791)</p>
        <p>Franciszek Karpiński (1741–1825)</p>
        <p>Franciszek Dionizy Kniaźnin (1750–1807)</p>
        <p>Hugo Kołłątaj (1750–1812)</p>
        <p>Stanisław Konarski (1700–1773)</p>
        <p>Stanisław Staszic (1755-1826)</p>
        <p>Julian Ursyn Niemcewicz (1758-1841)</p> <br />
        <Link to="/oswiecenie">
          <button className="btn">Więcej</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Pod} alt="..." className="img" />
          </div>
          <div className="image-stack bottom">
            <img src={Moon} alt="..." className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
