import React, {useState} from 'react';
import classes from '../../styles/Header/HeaderMobile.module.scss'
import Layout from "../../hoc/Layout/Layout";
import UIText from "../../hoc/UIKit/UIText";
import {FaBars, FaTimes} from 'react-icons/fa';
import image from '../../assets/logo/logo.png'
import {useNavigate} from "react-router-dom";
import {ERROR_NOT_YET_ROUTE, MAIN_ROUTE} from "../../hoc/utils/consts";
import {Transition} from "react-transition-group";
import HeaderBackDrop from "./HeaderBackDrop";

const HeaderMobile = () => {
    const navigate = useNavigate()
    const [backdrop,setBackdrop] = useState<boolean>()

    return (
        <>
            <div className={classes['HeaderMobile']}>
                <Layout>
                    <div className={classes['HeaderMobile__content']}>
                        <img
                            className={classes['HeaderMobile__logo']}
                            src={image} alt=""
                            onClick={() => navigate(MAIN_ROUTE)}
                        />
                        <div className={classes['HeaderMobile__buttons']}>
                            <UIText type={'dark'} onClick={() => navigate(ERROR_NOT_YET_ROUTE)}
                            >
                                ВХОД
                            </UIText>
                            <UIText type={'dark'} onClick={() => navigate(ERROR_NOT_YET_ROUTE)}
                            >
                                РЕГИСТРАЦИЯ
                            </UIText>
                            <UIText type={'dark'} onClick={() => setBackdrop(!backdrop)}
                            >
                                {
                                    backdrop ? <FaTimes/> : <FaBars/>
                                }
                            </UIText>
                        </div>
                    </div>
                </Layout>
            </div>
            <Transition in={backdrop} timeout={500} mountOnEnter unmountOnExit>
                { state =>
                    <HeaderBackDrop
                        transition={state}
                    />
                }
            </Transition>
        </>
    );
};

export default HeaderMobile;