import React from 'react';
import classes from "./MainPage.module.css"
import technodom from "../icons/technodom.jpeg"
import {obogrevately} from "../data/obogrevately"
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className={classes.mainPage}>
            <div className={classes.mainPageBtn0}>
            <button className={classes.mainPageBtn}>Акции</button>
            <button className={classes.mainPageBtn1}>🔥 TECHNO Распродажа</button>
            <button className={classes.mainPageBtn2}>TECHNO Рассрочка</button>
            <button className={classes.mainPageBtn3}>🔴 LIVE</button>
            <button className={classes.mainPageBtn4}>Ноутбуки</button>
            <button className={classes.mainPageBtn5}>Подарочные карты</button>
            <button className={classes.mainPageBtn6}><Link className={classes.mainPageBtn6P} to="/smartphones">Смартфоны</Link></button>
            </div>
            <img className={classes.mainPageJpg} src={technodom} alt={technodom} />
            <p className={classes.MainPageP}>Товары участвующие в акции:</p>
            <div className={classes.mainPageObogrevately}>
                {obogrevately.map((item, index) => (
                    <div key={index} className={classes.mainPageObogrevatel}>
                        <img className={classes.mainPageImgObogrevatel} src={item.image} alt={item.image} />
                        <p className={classes.mainPagePObogrevatel}>{item.title}</p>
                        <p className={classes.mainPageP1Obogrevatel}>{item.price}₸</p>
                        <button className={classes.mainPageBtnObogrevatel}>Купить</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainPage;