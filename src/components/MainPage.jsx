import React from 'react';
import classes from "./MainPage.module.css"

const MainPage = () => {
    return (
        <div className={classes.mainPage}>
            <h1>Главная страница</h1>
            <p>Это главная страница приложения.</p>
        </div>
    );
}

export default MainPage;