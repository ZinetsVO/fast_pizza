import React from 'react'
import css from './style.module.css'
import { categories } from '@/src/constants/index'
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className={css.navBar}>
        <div className='container'>
            <div className={css.navBar_inner}>
                {categories.map( ({ name, image, slug })=> (
                    <>
                    <div className={css.category_item}> 
                    <Image className={css.category_image} src={image} width="24" heght="15" alt={name}></Image>
                    <Link className={css.category_title} href={slug}>{name}</Link>
                    </div>
                    </>
                ))}
            </div>
        </div>
    </div>
  )
}

export default NavBar