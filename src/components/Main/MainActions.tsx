import React from 'react';
import Layout from "../../hoc/Layout/Layout";
import classes from '../../styles/Main/MainActions.module.scss'
import item0 from '../../assets/static/main/module_preview0.png'
import item1 from '../../assets/static/main/module_preview1.png'
import item2 from '../../assets/static/main/module_preview2.png'


const MainActions = () => {
    return (
        <div className={classes['MainActions']}>
            <Layout>
                <div className={classes['MainActions__text']}>
                    ПЛОТ - это первая в мире платформа для изучения транспортных наук и логистики. Мы нацелены на концентрацию трёх основных ролей на платформе: транспортные компании, университеты и студенты. Тем самым каждый может получить для себя какую-то выгоду!
                </div>
                <div className={classes['MainActions__options']}>
                    <div className={classes['MainActions__options-item']}>
                        <img src={item0} alt=""/>
                        <p>Модули</p>
                    </div>
                    <div className={classes['MainActions__options-item']}>
                        <img src={item1} alt=""/>
                        <p>Работодатели</p>
                    </div>
                    <div className={classes['MainActions__options-item']}>
                        <img src={item2} alt=""/>
                        <p>Сообщество</p>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default MainActions;