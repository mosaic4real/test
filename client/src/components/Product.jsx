import React from "react";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from 'react-router-dom';
import style from "./styles/product.module.css"


const Product = ({ item }) => {
  return (
    <div className={style.container}>
      <div className={style.circle} />
        <img className={style.imgage} src={item.img} />
      <div className={style.info}>
      <div className={style.icon}>
          <ShoppingCartOutlined />
        </div>
        <div className={style.icon}>
          <Link to = {`/product/${item._id}`}>
          <SearchOutlined/>
          </Link>
        </div>
        <div className={style.icon}>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
