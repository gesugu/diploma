import React, {useState, useEffect} from 'react';
import classes from "./MainPage.module.css"
import technodom from "../icons/technodom.jpeg"
import {obogrevately} from "../data/obogrevately"
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getItemsAction} from "../store/productReducer"
import PostService from '../API/PostService';
import MyLoader from './UI/loader/MyLoader';

const MainPage = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)

    async function getItems() {
        const items = await PostService.getAll()
        
        setIsLoading(false)
        return dispatch(getItemsAction(items));
    }

    const items = useSelector(state => state.productReducer.items);
    useEffect(()=>{
      getItems();
    }, [])
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
            <div className={classes.mainPageButtonsP}>
                <button className={classes.mainPageButtonsCh}>Популярные</button>
                <button className={classes.mainPageButtonsCh}>Обогреватели</button>
                <button className={classes.mainPageButtonsCh3}>Холодильники и морозильники</button>
                <button className={classes.mainPageButtonsCh4}>Стиральные машины</button>
                <button className={classes.mainPageButtonsCh}>Пылесосы</button>
                <button className={classes.mainPageButtonsCh5}>Компьютеры и ноутбуки</button>
            </div>
            <p className={classes.MainPageP}>Товары участвующие в акции:</p>
            {isLoading ? (
                // <p>Error occured</p>
                <MyLoader />
            ) : (
                <div className={classes.mainPageItemsP}>
                    {
                        items.map((item, index) => {
                            return(
                                <div key={index} className={classes.mainPageItems}>
                                <img className={classes.mainPageImgItems} src={item.image} alt="image" />
                                <p className={classes.mainPagePObogrevatel}>{item.title}</p>
                                <p className={classes.mainPageP1Obogrevatel}>{item.price}₸</p>
                                <Link to={`/item/${item.id}`}><button className={classes.mainPageBtnObogrevatel}></button>Купить</Link>
                            </div>
                            )
                        }
                        )
                    }
                </div>
            )}
            <div className={classes.mainPageObogrevately}>
                {obogrevately.map((item, index) => (
                    <div key={index} className={classes.mainPageObogrevatel}>
                        <div className={classes.mainPageMaterialIcon}>
                        <h2 class="material-icons"><Link to="/favorites">favorite</Link></h2>
                        </div>
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