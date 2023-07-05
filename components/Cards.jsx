import style from "../styles/Cards.module.css"
import React from 'react';

const Cards = () => {
  return (
    <div className={style.grid}>
      <div className={style.card}>
        <h3>Lorem.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptates, nulla!
        </p>
      </div>
      <div className={style.card}>
        <h3>Lorem.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          nesciunt.
        </p>
      </div>
      <div className={style.card}>
        <h3>Lorem, ipsum.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consectetur.
        </p>
      </div>
      <div className={style.card}>
        <h3>Lorem.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          quod?
        </p>
      </div>
    </div>
  );
};

export default Cards;