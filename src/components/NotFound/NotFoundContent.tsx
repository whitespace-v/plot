import React from 'react';
import classes from '../../styles/NotFound/NotFound.module.scss'
import image from '../../assets/static/helpers/error.png'
import Layout from "../../hoc/Layout/Layout";
import UIButton from "../../hoc/UIKit/UIButton";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTE} from "../../hoc/utils/consts";
import {FaArrowLeft} from "react-icons/fa";

const NotFoundContent = () => {
    const navigate = useNavigate()
    return (
        <div className={classes['NotFound']}>
            <Layout>
                <div className={classes['NotFound__content']}
                     style={{backgroundImage: `url(${image})`}}
                >
                    <p className={classes['NotFound__header']}>Ошибка 404</p>
                    <p className={classes['NotFound__text']}>Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует!</p>
                    <div className={classes['NotFound__button']}>
                        <UIButton type={"active"} onClick={() => navigate(MAIN_ROUTE)}>
                            <FaArrowLeft/> На главную
                        </UIButton>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default NotFoundContent;