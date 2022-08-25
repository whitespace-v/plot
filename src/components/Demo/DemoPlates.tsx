import React from 'react';
import classes from '../../styles/Demo/DemoPlates.module.scss'
import UIButton from "../../hoc/UIKit/UIButton";
import image1 from '../../assets/static/demo/image1.png'
import image2 from '../../assets/static/demo/image2.png'
import image3 from '../../assets/static/demo/image3.png'
import image4 from '../../assets/static/demo/image4.png'
import image5 from '../../assets/static/demo/image5.png'

const DemoPlates = () => {
    return (
        <div className={classes['DemoPlates']}>
            <div className={classes['DemoPlates__item']}>
                <div className={classes['DemoPlates__item-title']}>
                    Начни новую историю в познавательной новелле
                </div>
                <div className={classes['DemoPlates__item-button']}>
                    <UIButton type={'green'} onClick={() => {}}>НАЧАТЬ</UIButton>
                </div>
                <div className={classes['DemoPlates__item-image']}>
                    <img src={image1} alt=""/>
                </div>
            </div>
            <div className={classes['DemoPlates__item']}>
                <div className={classes['DemoPlates__item-title']}>
                    Окунись в удивительную историю транспорта и логистики
                </div>
                <div className={classes['DemoPlates__item-button']}>
                    <UIButton type={'green'} onClick={() => {}}>НАЧАТЬ</UIButton>
                </div>
                <div className={classes['DemoPlates__item-image']}
                     style={{backgroundImage: `url(${image2})`}}
                />
            </div>
            <div className={classes['DemoPlates__item']}>
                <div className={classes['DemoPlates__item-title']}>
                    Прояви смекалку и собери пазл
                </div>
                <div className={classes['DemoPlates__item-button']}>
                    <UIButton type={'green'} onClick={() => {}}>НАЧАТЬ</UIButton>
                </div>
                <div className={classes['DemoPlates__item-image']}
                     style={{backgroundImage: `url(${image3})`}}
                />
            </div>
            <div className={classes['DemoPlates__item']}>
                <div className={classes['DemoPlates__item-title']}>
                    Узнай всё о контейнерах
                </div>
                <div className={classes['DemoPlates__item-button']}>
                    <UIButton type={'green'} onClick={() => {}}>НАЧАТЬ</UIButton>
                </div>
                <div className={classes['DemoPlates__item-image']}
                     style={{backgroundImage: `url(${image4})`}}
                />
            </div>
            <div className={classes['DemoPlates__item']}>
                <div className={classes['DemoPlates__item-title']}>
                    Проверь свои знания
                </div>
                <div className={classes['DemoPlates__item-button']}>
                    <UIButton type={'green'} onClick={() => {}}>НАЧАТЬ</UIButton>
                </div>
                <div className={classes['DemoPlates__item-image']}>
                    <img src={image5} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default DemoPlates;