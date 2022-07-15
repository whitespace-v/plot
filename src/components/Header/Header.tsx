import React from 'react';
import logo from '../../assets/logo/logo.png'
import classes from '../../styles/Header/Header.module.scss'
import UIButton from "../../hoc/UIKit/UIButton";
import Layout from "../../hoc/Layout/Layout";
import UIText from "../../hoc/UIKit/UIText";
import {Link} from "react-router-dom";
import {ABOUT_ROUTE, MAIN_ROUTE} from "../../hoc/utils/consts";

interface IHeader{
    back: 'rainy' | 'marsh'
}


const Header = (props: IHeader) => {
    return (
        <div className={classes['Header'] + ' ' + classes[props.back]}>
            <Layout>
                <div className={classes['Header__nav']}>
                    <img src={logo} alt="" width={100}/>
                    <UIText type={window.location.pathname === MAIN_ROUTE ? 'white' : 'dark'}>
                        <Link to={MAIN_ROUTE}>Главная</Link>
                    </UIText>
                    <UIText type={window.location.pathname === ABOUT_ROUTE ? 'white' : 'dark'}>
                        <Link to={ABOUT_ROUTE}>О нас</Link>
                    </UIText>
                    <UIText type={'dark'}>Каталог</UIText>
                    <UIText type={'dark'}>FAQ</UIText>
                    <UIText type={'dark'}>Демо модуль</UIText>
                    <UIText type={'dark'}>Партнёры</UIText>
                    <UIText type={'dark'}>Сообщество</UIText>
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
