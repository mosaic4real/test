import React from "react";
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room,  Twitter,} from "@material-ui/icons";
import style from "./styles/footer.module.css"

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h1 className={style.h1}>GEMOS.</h1>
        <p className={style.desc}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata .
        </p>
        <div className={style.socialContainer}>
          <div className={style.socialIcon} color="3B5999">
            <Facebook />
          </div>
          <div className={style.socialIcon} color="E4405F">
            <Instagram />
          </div>
          <div className={style.socialIcon} color="55ACEE">
            <Twitter />
          </div>
          <div className={style.socialIcon} color="E60023">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className={style.center}>
        <h3 className={style.title}>Useful Links</h3>
        <ul className={style.list}>
          <li className={style.listItem}>Cart</li>
          <li className={style.listItem}>Home</li>
          <li className={style.listItem}>Combo</li>
          <li className={style.listItem}>Speakers</li>
          <li className={style.listItem}>Accessories</li>
          <li className={style.listItem}>My Account</li>
          <li className={style.listItem}>Order Tracking</li>
          <li className={style.listItem}>Terms</li>
        </ul>
      </div>
      <div className={style.right}>
      <h3 className={style.title}>Contact</h3>
        <div className={style.contactItem}>
          <Room style={{marginRight:"10px"}}/> 24 Gemos Straße, 21073 Germany 
        </div>
        <div className={style.contactItem}>
          <Phone style={{marginRight:"10px"}}/> +49 234 56 78
        </div>
        <div className={style.contactItem}>
          <MailOutline style={{marginRight:"10px"}} /> gemosguitar@gmail.com
        </div>
        <img className={style.img} src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  );
};

export default Footer;
