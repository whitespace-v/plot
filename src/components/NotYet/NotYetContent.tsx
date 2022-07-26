import React from 'react';
import classes from '../../styles/NotYet/NotYet.module.scss'
import Layout from "../../hoc/Layout/Layout";
import image from "../../assets/static/helpers/not_yet.png";
import UIInput from "../../hoc/UIKit/UIInput";
import UICheck from "../../hoc/UIKit/UICheck";
import UIButton from "../../hoc/UIKit/UIButton";
import {useNavigate} from "react-router-dom";
import {ERROR_NOT_YET_ROUTE} from "../../hoc/utils/consts";

const NotYetContent = () => {
    const navigate = useNavigate()
    return (
        <div className={classes['NotYet']}>
            <Layout>

                    <p className={classes['NotYet__header']}>
                        Уважаемые пользователи платформы ПЛОТ! Наш сайт находится в разработке.
                    </p>
                    <p className={classes['NotYet__subheader']}>
                        Оценить работу портала и первого бесплатного модуля можно будет 1 сентября 2022 г.
                    </p>
                    <div className={classes['NotYet__action']}>
                        <div className={classes['NotYet__action_content']}>
                            <p className={classes['NotYet__action_content-title']}>Подпишись на новости платформы и будь на плаву!</p>
                            <UIInput type={"white"} placeholder={'Ваш Email'}/>
                            <div className={classes['NotYet__action_content-check']}>
                                <UICheck/>
                                <p>вводя свою электронную почту, вы соглашаетесь с рассылкой новостей</p>
                            </div>
                            <UIButton type={"active"}
                                      onClick={() => navigate(ERROR_NOT_YET_ROUTE)}
                            >подписаться</UIButton>
                        </div>
                        <img src={image} alt=""/>
                    </div>
            </Layout>
        </div>
    );
};

export default NotYetContent;