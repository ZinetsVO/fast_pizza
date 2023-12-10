import React, { useState } from "react";
import css from "./style.module.css"
import { useCart } from "../Context";
import Image from "next/image";



const Cart = () => {




  const { cart, increment, decrement, removeFromCart } = useCart()
  console.log(cart);

  const cartCount = cart.length;

  const [open, setOpen] = useState(true)

 const cartClose = () => {
    setOpen(!open)
 }

 const cartClick = (e) => {
  e.stopPropagation();
};
  
  return (
    <div className={css.cart_wrapper}>
      <button className={css.cart_button}  onClick={() => cartClose()}> cart
        <span className={css.cart_count}>{cartCount}</span>
      </button>
      <div className={open? css.popup : css.popup + ' ' + css.popup__close} onClick={ () => cartClose()} >
        <div className={css.popup__inner} onClick={cartClick}>
          <p className={css.popup_title}>Ваше замовлення</p>
          <ul className={css.cart__list}>
            {cart.map( (item) => (
             <li key={item.id} className={css.cart__item}>
              <Image className={css.item__img} src={item.imageUrl} alt={item.name} width= {84} height={84}/>
              <div className={css.item__info__wrapper}>
                <button className={css.item__delete} onClick={() => removeFromCart(item.id)}>X</button>
                <h2 className={css.item_title}>{item.title}</h2>
                <p className={css.item__detail__info}>{item.basement} тісто, {item.diametr} см.</p>

                <div className={css.item__price__info}>
                  <div className={css.item__count}>
                    <button className={css.item__decrement} disabled={item.count <=1} onClick={ () => decrement(item.id)} > - </button>
                    <span className={css.item__numbers}>{item.count}</span>
                    <button className={css.item__increment} disabled={item.count >=10} onClick={ () => increment(item.id)}> + </button>

                  </div>
                  <span className={css.item__price}>{item.price}₴</span>
                </div>
              </div>




             </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Cart;
