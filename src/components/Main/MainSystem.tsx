import React from 'react';
import Layout from "../../hoc/Layout/Layout";
import classes from '../../styles/Main/MainSystem.module.scss'
import UIButton from "../../hoc/UIKit/UIButton";
import item0 from '../../assets/static/main/window0.png'
import item1 from '../../assets/static/main/window1.png'
import {ERROR_NOT_YET_ROUTE} from "../../hoc/utils/consts";
import {useNavigate} from "react-router-dom";

const MainSystem = () => {
    const navigate = useNavigate()
    return (
        <div className={classes['MainSystem']}>
            <Layout>
                <p className={classes['MainSystem__title']}>
                    Система модулей
                </p>
                <p className={classes['MainSystem__subtitle']}>
                    Платформа охватывает все сферы транспортной логистики и готова предоставить пользователю как интерактивные обучающие модули, так и добавить разнообразие в обучение с помощью деловых игр
                </p>
                <div className={classes['MainSystem__options']}>
                    <div
                        className={classes['MainSystem__options-item']}
                        style={{backgroundImage: `url(${item0})`}}
                    >
                        <UIButton onClick={() => {navigate(ERROR_NOT_YET_ROUTE)}} type={"disabled"}>
                            Модули
                        </UIButton>
                    </div>
                    <div
                        className={classes['MainSystem__options-item']}
                        style={{backgroundImage: `url(${item1})`}}
                    >
                        <UIButton onClick={() => {navigate(ERROR_NOT_YET_ROUTE)}} type={"disabled"}>
                            Деловые игры
                        </UIButton>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default MainSystem;