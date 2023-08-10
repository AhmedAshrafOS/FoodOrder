import React, { Fragment } from "react";

import mealsImage from '../../assets/meals.jpg'
import cLasses from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={cLasses.header}>
                <h1>ElSultan Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div className={cLasses['main-image']}>
                <img src={mealsImage} alt="Meals" />
            </div>
        </Fragment>
    );
};

export default Header;