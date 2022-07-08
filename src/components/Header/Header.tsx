import React from 'react';
import logo from '../../assets/logo/logo.png'
import classes from '../../styles/Header/Header.module.scss'
import UIButton from "../../hoc/UIKit/UIButton";
import Layout from "../../hoc/Layout/Layout";

const Header = () => {
    return (
        <div className={classes['Header']}>
            <Layout>
                <div className={classes['Header__nav']}>
                    <div className={classes['Header__nav-item'] + ' ' + classes['active']}>
                        <img src={logo} alt=""/> Главная
                    </div>
                    <div className={classes['Header__nav-item']}>О нас</div>
                    <div className={classes['Header__nav-item']}>Каталог</div>
                    <div className={classes['Header__nav-item']}>FAQ</div>
                    <div className={classes['Header__nav-item']}>Демо модуль</div>
                    <div className={classes['Header__nav-item']}>Партнёры</div>
                    <div className={classes['Header__nav-item']}>Сообщество</div>
                </div>
                <div className={classes['Header__options']}>
                    <UIButton type={"active"} onClick={() => {}}>РЕГИСТРАЦИЯ</UIButton>
                    <UIButton type={"active"} onClick={() => {}}>ВОЙТИ</UIButton>
                </div>
            </Layout>
        </div>
    );
};

export default Header;