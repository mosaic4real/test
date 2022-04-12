import React from "react";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import style from "./styles/categories.module.css"


const Categories = () => {
  return (
    <div className={style.container}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
