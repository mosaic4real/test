import React from "react";
import {Link} from "react-router-dom";
import style from "./styles/categoryitem.module.css"

const CategoryItem = ({ item }) => {
  return (
    <div className={style.container}>
      <Link to ={`/products/${item.cat}`}>
      <image className={style.image} src= {item.img} />
      <div className={style.info}>
      <h1 className={style.title}>{item.title}</h1>
        <button className={style.button}>SHOP NOW</button>
      </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
