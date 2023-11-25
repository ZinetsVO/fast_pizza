import React from "react";
import css from "./style.module.css"
import { useCart } from "../Context";
import Image from "next/image";


const Cart = () => {
  const {cart} = useCart()
  console.log(cart);
  
  return (
    <div className={css.cart_wrapper}>
      <button className={css.cart_button} > cart
        <span className={css.cart_count}>0</span>
      </button>
      <div className={css.popup}>
        <div className={css.popup__inner}>
          <ul className={css.cart__list}>
            {cart.map( (item) => (
             <li key={item.id} className={css.cart__item}>
              <Image src={item.imageUrl} alt={item.name} width= {84} height={84}/>
             </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Cart;
