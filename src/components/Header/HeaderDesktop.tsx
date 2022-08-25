import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import classes from "../../styles/Header/HeaderDesktop.module.scss";
import Layout from "../../hoc/Layout/Layout";
import logo from "../../assets/logo/logo.png";
import UIText from "../../hoc/UIKit/UIText";
import {ABOUT_ROUTE, DEMO_ROUTE, ERROR_NOT_YET_ROUTE, MAIN_ROUTE} from "../../hoc/utils/consts";
import UIButton from "../../hoc/UIKit/UIButton";

interface IHeaderDesktop{
    back: 'rainy' | 'marsh'
}

const HeaderDesktop = (props: IHeaderDesktop) => {
    const navigate = useNavigate()
    return (
        <div className={classes['HeaderDesktop'] + ' ' + classes[props.back]}>
            <Layout>
                <div className={classes['HeaderDesktop__nav']}>
                    <img src={logo} alt="" width={100}/>
                    <UIText type={window.location.pathname === MAIN_ROUTE ? 'white' : 'dark'}>
                        <Link to={MAIN_ROUTE}>Главная</Link>
                    </UIText>
                    <UIText type={window.location.pathname === ABOUT_ROUTE ? 'white' : 'dark'}>
                        <Link to={ABOUT_ROUTE}>О нас</Link>
                    </UIText>
                    <UIText type={window.location.pathname === '' ? 'white' : 'dark'}>
                        <Link to={ERROR_NOT_YET_ROUTE}>Каталог</Link>
                    </UIText>
                    <UIText type={window.location.pathname === '' ? 'white' : 'dark'}>
                        <Link to={ERROR_NOT_YET_ROUTE}>FAQ</Link>
                    </UIText>
                    <UIText type={window.location.pathname === '' ? 'white' : 'dark'}>
                        <Link to={DEMO_ROUTE}>Демо модуль</Link>
                    </UIText>
                    <UIText type={window.location.pathname === '' ? 'white' : 'dark'}>
                        <Link to={ERROR_NOT_YET_ROUTE}>Партнёры</Link>
                    </UIText>
                    <UIText type={window.location.pathname === '' ? 'white' : 'dark'}>
                        <Link to={ERROR_NOT_YET_ROUTE}>Сообщество</Link>
                    </UIText>
                </div>
                <div className={classes['HeaderDesktop__options']}>
                    <UIButton type={"active"} onClick={() => {navigate(ERROR_NOT_YET_ROUTE)}}>РЕГИСТРАЦИЯ</UIButton>
                    <UIButton type={"active"} onClick={() => {navigate(ERROR_NOT_YET_ROUTE)}}>ВОЙТИ</UIButton>
                </div>
            </Layout>
        </div>
    );
};

export default HeaderDesktop;