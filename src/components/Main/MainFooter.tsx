import React from 'react';
import classes from '../../styles/Main/MainFooter.module.scss'
import UIButton from "../../hoc/UIKit/UIButton";
import image from '../../assets/logo/logo_dark.png'
import UIInput from "../../hoc/UIKit/UIInput";

const MainFooter = () => {
    return (
        <div className={classes['MainFooter']}>
            <div className={classes['MainFooter__intro']}>
                <img src={image} alt=""/>
            </div>
            <p className={classes['MainFooter__text']}>
                Не будь на дне, забирайся на ПЛОТ !
            </p>
            <UIButton type={'active'} onClick={() => {}}>Регистрация</UIButton>
            <div className={classes['MainFooter__action']}>
                <div className={classes['MainFooter__action-title']}>
                    <p>Подписывайся на наши новости</p>
                </div>
                <div className={classes['MainFooter__action-enter']}>
                    <UIInput
                        type="dark"
                        placeholder={'Ваш Email'}
                    />
                    <UIButton type={'active'} onClick={() => {}}>Подписаться</UIButton>
                </div>
            </div>
        </div>
    );
};

export default MainFooter;