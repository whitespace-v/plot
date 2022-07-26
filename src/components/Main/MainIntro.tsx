import React from 'react';
import classes from '../../styles/Main/MainIntro.module.scss'
import MainIntroPicture from '../../assets/static/main/intro.png'
import MainIntroPictureMobile from '../../assets/static/main/introMobile.png'
import UIButton from "../../hoc/UIKit/UIButton";
import Layout from "../../hoc/Layout/Layout";
import {ERROR_NOT_YET_ROUTE} from "../../hoc/utils/consts";
import {useNavigate} from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const MainIntro = () => {
    const navigate = useNavigate()
    const {width} = useWindowDimensions()
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
                    <div className={classes['MainIntro__intro-picture' ]}>
                        {width < 1600 ?
                            <img src={MainIntroPictureMobile} alt=""/>
                            :
                            <img src={MainIntroPicture} alt=""/>
                        }
                    </div>
                    <div className={classes['MainIntro__action']}>
                        <p>Начни изучать логистику по новому прямо сейчас!</p>
                        <UIButton type={"active"} onClick={() => {navigate(ERROR_NOT_YET_ROUTE)}}>Регистрация</UIButton>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default MainIntro;