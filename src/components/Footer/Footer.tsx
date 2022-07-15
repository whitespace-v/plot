import React from 'react';
import classes from '../../styles/Footer/Footer.module.scss'
import UIText from "../../hoc/UIKit/UIText";
import image from '../../assets/logo/logo_bright.png'
import vk from '../../assets/static/media/VK.png'
import wa from '../../assets/static/media/WhatsApp.png'
import tg from '../../assets/static/media/Telegram.png'

const Footer = () => {
    return (
        <div className={classes['Footer']}>
            <div className={classes['Footer__nav']}>
                <UIText type={'dark'}>ЛИЧНЫЙ КАБИНЕТ</UIText>
                <UIText type={'dark'}>ПАРТНЕРЫ</UIText>
                <UIText type={'dark'}>СООБЩЕСТВО</UIText>
                <UIText type={'dark'}>FAQ</UIText>
                <UIText type={'dark'}>КАТАЛОГ МОДУЛЕЙ</UIText>
                <UIText type={'dark'}>ВХОД</UIText>
                <UIText type={'dark'}>РЕГИСТРАЦИЯ</UIText>
            </div>
            <div className={classes['Footer__contacts']}>
                <img src={image} alt=""/>
                <p className={classes['Footer__contacts-mail']}>plot_education@inbox.ru</p>
                <div className={classes['Footer__contacts-media']}>
                    <img src={vk} alt=""/>
                    <img src={wa} alt=""/>
                    <img src={tg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Footer;