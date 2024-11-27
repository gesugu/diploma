import React, {useState, useEffect} from 'react';
import classes from "./MainPage.module.css"
import technodom from "../icons/technodom.jpeg"
import {obogrevately} from "../data/obogrevately"
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getItemsAction} from "../store/productReducer"
import PostService from '../API/PostService';
import MyLoader from './UI/loader/MyLoader';
import {filteredProductAction, selectItemAction, selectItemAction2} from "../store/productReducer"
import technodom2 from "../icons/technodom2.jpg"
import technodom3 from "../icons/technodom3.png"
import technodom4 from "../icons/technodom4.png"

const MainPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisible = () => {
        setIsVisible(!isVisible)
    }

    function getItemById(item_id){
        navigate(`/item2/${item_id}`)
        console.log('success', item_id)
    }

    const addToFavorites = (item_id) => {
        const selected = items.find((item) => item.id === item_id)
        if(selected){
            dispatch(selectItemAction([selected]))
        }
    }

    const moveToFavoritesPage = () => {
        navigate('/favorites')
    }

    const selectedItem = (item2_id) => {
        dispatch(selectItemAction([item2_id]))
        navigate(`/favorites/${item2_id}`)
    }

    const addToKorzina = (item_id2) => {
        const selected2 = items.find((item) => item.id === item_id2)
        if(selected2){
            dispatch(selectItemAction2([selected2]))
        }
    }

    async function getItems() {
        const items = await PostService.getAll()
        
        setIsLoading(false)
        return dispatch(getItemsAction(items));
    }

    const items = useSelector(state => state.productReducer.items);
    useEffect(()=>{
      getItems()
    }, [])
    return (
        <div onClick={() => toggleVisible()} className={isVisible? classes.mainPageToggle : classes.mainPageToggle}>
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
                        items.filter(item => item.popular === "yes").map((item, index) => {
                            return(
                                <div key={index} className={classes.mainPageItems}>
                                <div className={classes.smartphonesPageMaterialParent}>
                                <div className={classes.smartphonesPageMaterial}>
                                <h2 className="material-icons" onClick={() => addToKorzina(item.id)}>download</h2>
                                </div>
                                <div className={classes.mainPageMaterialIcon}>
                                <h2 class="material-icons" onClick={() => addToFavorites(item.id)}>favorite</h2>
                                </div>
                                </div>
                                <img className={classes.mainPageImgItems} src={item.image} alt="image" />
                                <p className={classes.mainPagePObogrevatel}>{item.title}</p>
                                <p className={classes.mainPageP1Obogrevatel}>{item.price}₸</p>
                                <div className={classes.mainPageBtnsParent}>
                                <button className={classes.mainPageBtnObogrevatel} onClick={() => getItemById(item.id)}>Купить</button>
                                <button className={classes.mainPageBtnObogrevatel} onClick={moveToFavoritesPage}>Избранные</button>
                                </div>
                            </div>
                            )
                        }
                        )
                    }
                </div>
            )}
            <p className={classes.MainPageP}>Популярные товары:</p>
            <div className={classes.mainPageObogrevately}>
                {items.filter(item => item.type2 === "not").map((item, index) => (
                    <div key={index} className={classes.mainPageObogrevatel}>
                        <div className={classes.smartphonesPageMaterialParent}>
                                <div className={classes.smartphonesPageMaterial}>
                                <h2 className="material-icons" onClick={() => addToKorzina(item.id)}>download</h2>
                                </div>
                                <div className={classes.mainPageMaterialIcon}>
                                <h2 class="material-icons" onClick={() => addToFavorites(item.id)}>favorite</h2>
                                </div>
                                </div>
                        <img className={classes.mainPageImgObogrevatel} src={item.image} alt={item.image} />
                        <p className={classes.mainPagePObogrevatel}>{item.title}</p>
                        <p className={classes.mainPageP1Obogrevatel}>{item.price}₸</p>
                        <button className={classes.mainPageBtnObogrevatel} onClick={() => getItemById(item.id)}>Купить</button>
                    </div>
                ))}
            </div>
            <div className={classes.mainPageDivs}>
                <div className={classes.mainPageDivs0}><p>Распродажа</p></div>
                <div className={classes.mainPageDivs0}><p>Смартфоны и гаджеты</p></div>
                <div className={classes.mainPageDivs0}><p>Телевизоры</p></div>
                <div className={classes.mainPageDivs0}><p>Ноутбуки</p></div>
                <div className={classes.mainPageDivs0}><p>Наушники</p></div>
                <div className={classes.mainPageDivs0}><p>Планшеты</p></div>
                <div className={classes.mainPageDivs0}><p>Красота и здоровье</p></div>
                <div className={classes.mainPageDivs0}><p>Кондиционеры</p></div>
                <div className={classes.mainPageDivs0}><p>Холодильники</p></div>
                <div className={classes.mainPageDivs0}><p>Стиральные машины</p></div>
                <div className={classes.mainPageDivs0}><p>Пылесосы</p></div>
                <div className={classes.mainPageDivs0}><p>Встраиваемая техника</p></div>
                <div className={classes.mainPageDivs0}><p>Водонагреватели</p></div>
                <div className={classes.mainPageDivs0}><p>Спорт,туризм,багаж</p></div>
            </div>
            <div className={classes.mainPageImages}>
            <img className={classes.mainPageImages0} src={technodom2} alt={technodom2} />
            <img className={classes.mainPageImages0} src={technodom3} alt={technodom3} />
            <img className={classes.mainPageImages0} src={technodom4} alt={technodom4} />
            </div>
            <div className={classes.mainPageButtonsP}>
                <button className={classes.mainPageButtonsCh}>Бытовая техника</button>
                <button className={classes.mainPageButtonsCh2}>Встраиваемая техника</button>
                <button className={classes.mainPageButtonsCh3}>Климатическая техника</button>
                <button className={classes.mainPageButtonsCh4}>Хранение продуктов</button>
                <button className={classes.mainPageButtonsCh}>Уход за одеждой</button>
                <button className={classes.mainPageButtonsCh5}>Уборка и мойка</button>
            </div>
            <div className={classes.mainPageObogrevately}>
                {items.filter(item => item.type === "notebook").map((item, index) => (
                    <div key={index} className={classes.mainPageObogrevatel}>
                        <div className={classes.smartphonesPageMaterialParent}>
                                <div className={classes.smartphonesPageMaterial}>
                                <h2 className="material-icons" onClick={() => addToKorzina(item.id)}>download</h2>
                                </div>
                                <div className={classes.mainPageMaterialIcon}>
                                <h2 class="material-icons" onClick={() => addToFavorites(item.id)}>favorite</h2>
                                </div>
                                </div>
                        <img className={classes.mainPageImgObogrevatel} src={item.image} alt={item.image} />
                        <p className={classes.mainPagePObogrevatel}>{item.title}</p>
                        <p className={classes.mainPageP1Obogrevatel}>{item.price}₸</p>
                        <button className={classes.mainPageBtnObogrevatel} onClick={() => getItemById(item.id)}>Купить</button>
                    </div>
                ))}
            </div>
            <p className={classes.MainPageP}>Лучшие предложения:</p>
            <div className={classes.mainPageObogrevately}>
                {items.filter(item => item.type === "notebook").map((item, index) => (
                    <div key={index} className={classes.mainPageObogrevatel}>
                        <div className={classes.smartphonesPageMaterialParent}>
                                <div className={classes.smartphonesPageMaterial}>
                                <h2 className="material-icons" onClick={() => addToKorzina(item.id)}>download</h2>
                                </div>
                                <div className={classes.mainPageMaterialIcon}>
                                <h2 class="material-icons" onClick={() => addToFavorites(item.id)}>favorite</h2>
                                </div>
                                </div>
                        <img className={classes.mainPageImgObogrevatel} src={item.image} alt={item.image} />
                        <p className={classes.mainPagePObogrevatel}>{item.title}</p>
                        <p className={classes.mainPageP1Obogrevatel}>{item.price}₸</p>
                        <button className={classes.mainPageBtnObogrevatel} onClick={() => getItemById(item.id)}>Купить</button>
                    </div>
                ))}
            </div>
            <p className={classes.MainPageP}>Цифровой товар:</p>
            <div className={classes.mainPageObogrevately}>
                {items.filter(item => item.type === "notebook").map((item, index) => (
                    <div key={index} className={classes.mainPageObogrevatel}>
                        <div className={classes.smartphonesPageMaterialParent}>
                                <div className={classes.smartphonesPageMaterial}>
                                <h2 className="material-icons" onClick={() => addToKorzina(item.id)}>download</h2>
                                </div>
                                <div className={classes.mainPageMaterialIcon}>
                                <h2 class="material-icons" onClick={() => addToFavorites(item.id)}>favorite</h2>
                                </div>
                                </div>
                        <img className={classes.mainPageImgObogrevatel} src={item.image} alt={item.image} />
                        <p className={classes.mainPagePObogrevatel}>{item.title}</p>
                        <p className={classes.mainPageP1Obogrevatel}>{item.price}₸</p>
                        <button className={classes.mainPageBtnObogrevatel} onClick={() => getItemById(item.id)}>Купить</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainPage;