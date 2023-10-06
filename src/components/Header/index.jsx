import { useState } from "react";
import css from "./style.module.css";
import Logo from './logo';
import NavList from '../NavList';

const Header = () => {
  const [menu, setMenu] = useState(false)

  const menuHandler = () => {
    setMenu(!menu);
  }

  return (
    <nav className={css.header}>
      <div className='container'>
        <div className={css.header_inner}>
          <Logo/>

          <NavList menu={menu}/>

          <button className={css.header_burger} onClick={menuHandler}>
            <span className={menu? `${css.burger_line} ${css.burger_active}`: css.burger_line}></span>
            <span className={menu? `${css.burger_line} ${css.burger_active}`: css.burger_line}></span>
            <span className={menu? `${css.burger_line} ${css.burger_active}`: css.burger_line}></span>
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Header