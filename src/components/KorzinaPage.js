import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classes from "./KorzinaPage.module.css"
import cirrus from "../icons/cirrus.jpg"
import { Link, useNavigate } from 'react-router-dom';
import {getItemsAction, selectItemAction, selectItemAction2, removeItemAction} from "../store/productReducer"
import PostService from '../API/PostService';

const KorzinaPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {item3_id} = useParams()
    const selectItem2 = useSelector(state => state.productReducer.selectItem2);
    const items = useSelector(state => state.productReducer.items);

    function getItemById(item_id){
        navigate(`/item2/${item_id}`)
        console.log('success', item_id)
    }

    const removeItem = (id) => {
        dispatch(removeItemAction(id))
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

    const addToKorzina = (item_id2) => {
        const selected2 = items.find((item) => item.id === item_id2)
        if(selected2){
            dispatch(selectItemAction2([selected2]))
        }
    }

    // const priceKorzina = () => {
    //     let count = 1
    //     const result = selectItem2.map((item) => Number(item.price) + Number(item.price))
    //     console.log(result);
    // }
    // priceKorzina()

        const price = selectItem2.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
        console.log(price);

    const moveToKorzinaPage = () => {
        navigate('/korzina')
    }
    return (
        <div className={classes.korzinaPage}>
    <p className={classes.korzinaPageP}>Корзина Technodom</p>
    {selectItem2.length > 0 ? (
        <div className={classes.korzinaPageD2Parent}>
            {selectItem2.map((item) => (
                <div key={item.id} className={classes.korzinaPageDParents}>
                    <div className={classes.korzinaPageDParent}>
                        <img className={classes.korzinaPageImg} src={item.image} alt={item.image}></img>
                        <div className={classes.korzinaPageDHP}>
                            <h2 className={classes.korzinaPageH}>{item.title}</h2>
                            <p className={classes.korzinaPageP0}>{item.price}₸</p>
                        </div>
                        <button className={classes.korzinaPageBtn} onClick={() => removeItem(item.id)}>Удалить</button>
                    </div>
                </div>
            ))}
            <div className={classes.korzinaPageD2}>
                <p>Сумма к оплате {price}₸</p>
            </div>
        </div>
    ) : (
        <div className={classes.korzinaPageDi}>
            <div className={classes.korzinaPageD}>
                <img className={classes.korzinaPageDImg} src={cirrus} alt={cirrus}></img>
                <p className={classes.korzinaPageDP}>Корзина пуста</p>
                <button className={classes.korzinaPageDBtn}><Link className={classes.korzinaPageDP0} to="/">На главную</Link></button>
            </div>
            <p className={classes.korzinaPageDiP}>Рекомендуем</p>
            <div className={classes.KorzinaPageDd}>
                {items.filter(item => item.type === 'smartphone').map((item, index) => (
                    <div key={index} className={classes.mainPageItems}>
                        <div className={classes.smartphonesPageMaterialParent}>
                            <div className={classes.smartphonesPageMaterial}>
                                <h2 className="material-icons" onClick={() => addToKorzina(item.id)}>download</h2>
                            </div>
                            <div className={classes.mainPageMaterialIcon}>
                                <h2 className="material-icons" onClick={() => addToFavorites(item.id)}>favorite</h2>
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
                ))}
            </div>
        </div>
    )}
</div>
    );
}

export default KorzinaPage;