import React, {useEffect} from "react"
import {smartphonesArr} from "../data/smartphonesArr"
import classes from "./Smartphones.module.css"
import { Link } from 'react-router-dom';
import {setProductInfoAction, setProductAction} from "../store/productReducer"
import { useDispatch, useSelector } from 'react-redux';

const Smartphones = () => {
    const dispatch = useDispatch();
    const smartphonesArr2 = useSelector(state => state.productReducer.smartphonesArr);
    const getProductById = (product) => {
        dispatch(setProductInfoAction(product))
    }
    console.log(smartphonesArr2);
    const getProducts = () => {
        dispatch(setProductAction(smartphonesArr))
    }
    useEffect(() => {
        getProducts()
    }, [])
    return(
        <div className={classes.smartphonesPage}>
            <div className={classes.mainPageObogrevately}>
                {smartphonesArr.map((item, index) => (
                    <div key={index} className={classes.mainPageObogrevatel}>
                        <img className={classes.mainPageImgObogrevatel} src={item.image} alt={item.image} />
                        <p className={classes.mainPagePObogrevatel}>{item.title}</p>
                        <p className={classes.mainPageP1Obogrevatel}>{item.price}₸</p>
                        <Link to={`/item/${item.id}`}><button className={classes.mainPageBtnObogrevatel} onClick={() => getProductById(item.id)}>Купить</button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Smartphones