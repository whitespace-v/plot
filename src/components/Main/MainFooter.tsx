import React from 'react';
import classes from '../../styles/Main/MainFooter.module.scss'
import UIButton from "../../hoc/UIKit/UIButton";
import image from '../../assets/logo/logo_dark.png'
import UIInput from "../../hoc/UIKit/UIInput";
import {ERROR_NOT_YET_ROUTE} from "../../hoc/utils/consts";
import {useNavigate} from "react-router-dom";

const MainFooter = () => {
    const navigate = useNavigate()
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
                    <UIButton type={'active'} onClick={() => {navigate(ERROR_NOT_YET_ROUTE)}}>Подписаться</UIButton>
                </div>
            </div>
        </div>
    );
};

export default MainFooter;