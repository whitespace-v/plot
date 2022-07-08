import React from 'react';
import classes from '../../styles/Main/MainIntro.module.scss'
import MainIntroPicture from '../../assets/static/main/intro.png'
import UIButton from "../../hoc/UIKit/UIButton";
import Layout from "../../hoc/Layout/Layout";

const MainIntro = () => {
    return (
        <div className={classes['MainIntro']}>
            <Layout>
                <div className={classes['MainIntro__intro']}>
                    <div className={classes['MainIntro__intro-naming']}>
                        <span className={classes['MainIntro__intro-naming_fl']}>П</span>латформа <br/>
                        <span className={classes['MainIntro__intro-naming_fl']}>Л</span>огистики и <br/>
                        <span className={classes['MainIntro__intro-naming_fl']}>О</span>снов <br/>
                        <span className={classes['MainIntro__intro-naming_fl']}>Т</span>ранспорта <br/>
                    </div>
                    <div className={classes['MainIntro__intro-picture']}>
                        <img src={MainIntroPicture} alt=""/>
                    </div>
                </div>

                <div className={classes['MainIntro__action']}>
                    <p>Начни изучать логистику по новому прямо сейчас!</p>
                    <UIButton type={"active"} onClick={() => {}}>ДЕМО-МОДУЛЬ</UIButton>
                </div>
            </Layout>
        </div>
    );
};

export default MainIntro;