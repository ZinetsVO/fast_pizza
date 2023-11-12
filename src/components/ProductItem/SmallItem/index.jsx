import React from "react";
import css from "./style.module.css";
import Image from "next/image";

const SmallItem = ({ item, detailHendler }) => {
  const { id, imageUrl, title, description, price, old_price, weight, label, spicy } =
    item;

  return (
    <article className={css.item__article} onClick={detailHendler}>
      {label ? <span className={css.item__label}>{label}</span> : <></>}
      <Image
        width={100}
        height={100}
        alt={title}
        src={imageUrl}
        className={css.item__image}
      />
      <div className={css.item__text}>
        <h2 className={css.item__title}>{title}</h2>
        <p className={css.item__desc}>{description}</p>
        <div className={css.item__select}>
          <button className={css.item__button}>Вибрати</button>
          <div className={css.item__price_wrapper}>
            <span className={css.item__price}>{price} ₴</span>
            <span className={css.item__old_price}>
              {old_price} {old_price ? "₴" : ""}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SmallItem;
