import React from 'react';
import classes from '../../styles/About/AboutIntro.module.scss'
import Layout from "../../hoc/Layout/Layout";
import image from '../../assets/static/about/intro.png'
import UIButton from "../../hoc/UIKit/UIButton";
import {ERROR_NOT_YET_ROUTE} from "../../hoc/utils/consts";
import {useNavigate} from "react-router-dom";

const AboutIntro = () => {
    const navigate = useNavigate()
    return (
        <div className={classes['AboutIntro']}>
            <Layout>
                <div className={classes['AboutIntro__content']}>
                    <div className={classes['AboutIntro__block']}>
                        <img src={image} alt=""/>
                    </div>
                    <div className={classes['AboutIntro__block']}>
                        <div className={classes['AboutIntro__block-title']}>
                            ПЛОТ
                        </div>
                        <div className={classes['AboutIntro__block-text']}>
                            Команда ПЛОТ это в первую очередь выпускники транспортного
                            Университета, которые знают и понимают потребности сегодняшних
                            студентов и школьников. Мы видим, как тяжело некоторым втянуться
                            в процесс обучения. Отсутствие различных практик в изучении логистики
                            и транспортных наук приводит нас к созданию платформы, которая направлена
                            разнообразить процесс обучения опираясь на современные стандарты качества.
                        </div>
                        <div className={classes['AboutIntro__block-button']}>
                            <UIButton type={"active"}
                                      onClick={() => {navigate(ERROR_NOT_YET_ROUTE)}}
                            >регистрация</UIButton>
                        </div>
                        <div className={classes['AboutIntro__block-line']}/>
                        <div className={classes['AboutIntro__block-text'] + ' ' + classes['subtext']}>
                            Остались вопросы?
                            Свяжитесь с нами!
                        </div>
                        <div className={classes['AboutIntro__block-phone']}>
                            +7 (924) 120-18-15
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default AboutIntro;