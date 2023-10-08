import React from "react";
import css from "./style.module.css"


const Cart = () => {
  return (
    <div className={css.cart_wrapper}>
      <button className={css.cart_button}> cart
        <span className={css.cart_count}>0</span>
      </button>
    </div>
  );
};

export default Cart;
