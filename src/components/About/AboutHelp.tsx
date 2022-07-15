import React from 'react';
import Layout from "../../hoc/Layout/Layout";
import classes from '../../styles/About/AboutHelp.module.scss'
import UIButton from "../../hoc/UIKit/UIButton";
import image from '../../assets/logo/logo_huge.png'

const AboutHelp = () => {
    return (
        <div className={classes['AboutHelp']}>
            <Layout>
                <div className={classes['AboutHelp__content']}>
                    <div className={classes['AboutHelp__block']}>
                        <p className={classes['AboutHelp__block-title']}>
                            Поддержка
                        </p>
                        <p className={classes['AboutHelp__block-subtitle']}>
                            Задачи, поставленные для реализации маркетинговых целей проекта:
                        </p>
                        <p  className={classes['AboutHelp__block-subtitle']}>
                            • Cотрудничество в сфере информации и практического опыта <br/>
                            • разработка и создание новых интерактивных форм обучения <br/>
                            • реклама <br/>
                        </p>
                        <p className={classes['AboutHelp__block-text']}>
                            Мы будем благодарны любой помощи
                        </p>
                        <div className={classes['AboutHelp__block-button']}>
                            <UIButton onClick={() => {}} type={"active"}>
                                связаться
                            </UIButton>
                        </div>
                    </div>
                    <img src={image} alt=""/>
                </div>
            </Layout>
        </div>
    );
};

export default AboutHelp;