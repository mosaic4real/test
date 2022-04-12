import { Badge } from "@material-ui/core";
import { Satellite, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./styles/navStyle.module.css"



const Navbar = () => {
  const quantity  = useSelector(state => state.cart.quantity)
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <span className={style.language}>EN</span>
          <div className={style.searchCont}>
            <input className={style.input} placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className={style.center}>
          <h1 className={style.logo}>GEMOS.</h1>
        </div>
        {
        click ? 
        <ul className={style.rightActive}>
        <li className={style.navItem}>
            <Link to= '/signup' 
            activeClasName={style.active}
            className={style.navLinks} onClick={handleClick}>
            REGISTER
            </Link>
        </li>
        <li className={style.navItem}>
            <Link to= '/login' 
            activeClasName={style.active}
            className={style.navLinks} onClick={handleClick}>
            SIGN IN
            </Link>
        </li>
          <Link to ="/cart">
          <div className={style.menuItem}>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
          </Link>
        </ul>
      : <ul className={style.right}>
      
      <li className={style.navItem}>
          <Link to= '/signup' 
          activeClasName={style.active}
          className={style.navLinks} onClick={handleClick}>
          REGISTER
          </Link>
      </li>
      <li className={style.navItem}>
          <Link to= '/login' 
          activeClasName={style.active}
          className={style.navLinks} onClick={handleClick}>
          SIGN IN
          </Link>
      </li>
        <Link to ="/cart">
        <div className={style.menuItem}>
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </div>
        </Link>
      </ul> 
      }
        <div className={style.icon} onClick={handleClick}>
            <i class="fas fa-bars"></i>
          </div>
      </div>
      
    </div>
  );
};

export default Navbar;
