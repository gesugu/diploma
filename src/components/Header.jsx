import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Header.module.css"

const Header = () => {
  return (
    <div className={classes.headerPage}>
      <div className={classes.headerPage3}>
        <button className={classes.headerPage3Btn}>Скачать приложение</button>
        <p className={classes.headerPage3P}>1717 с 9:00 до 22:00 ежедневно</p>
        <button className={classes.btnHeader3}>Рус</button>
        <button className={classes.btnHeader3}>Eng</button>
      </div>
      <div className={classes.headerPage2}>
      <h2 className={classes.h2Header}>Все делаем с любовью</h2>
      <button className={classes.btnHeader}><Link className={classes.btnPHeader} to="/katalog">Каталог</Link></button>
      <input type="text" className={classes.inputHeader} placeholder='Я хочу найти' />
        {/* <h2><Link to="/">Главная</Link></h2> */}
        <div className={classes.h2Parent}>
        <h2 class="material-icons">favorite</h2>
        <h2><Link className={classes.h2Icons} to="/favorites">Избранное</Link></h2>
        </div>
        <div className={classes.h2Parent2}>
        <h2 class="material-icons">scale</h2>
        <h2><Link className={classes.h2Icons} to="/compare">Сравнить</Link></h2>
        </div>
        <div className={classes.h2Parent3}>
        <h2 class="material-icons">download</h2>
        <h2><Link className={classes.h2Icons} to="/korzina">Корзина</Link></h2>
        </div>
        {/* <h2><Link to="/katalog">Каталог</Link></h2> */}
      </div>
    </div>
  );
};

export default Header;
