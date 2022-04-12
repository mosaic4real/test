import React from "react";
import { Send } from "@material-ui/icons";
import style from "./styles/newsletter.module.css"


const Newsletter = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Newsletter</h1>
      <div className={style.desc}>Get timely updates from your favorite artist guitar.</div>
      <div className={style.inputContainer}>
        <input className={style.input} placeholder="Your email" />
        <button className={style.button}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
