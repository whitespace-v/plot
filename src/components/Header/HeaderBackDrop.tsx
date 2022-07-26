import React from 'react';
import classes from '../../styles/Header/HeaderBackDrop.module.scss'
import UIText from "../../hoc/UIKit/UIText";
import {ERROR_NOT_YET_ROUTE} from "../../hoc/utils/consts";
import {useNavigate} from "react-router-dom";

const HeaderBackDrop = ({transition} : {transition: string}) => {
    const navigate = useNavigate()
    return (
        <div className={classes['HeaderBackDrop'] + ' ' + classes[transition]}>
            <div className={classes['HeaderBackDrop__content'] + ' ' + classes[transition]}>
                <UIText type={"dark"} onClick={() => navigate(ERROR_NOT_YET_ROUTE)}
                >
                    ЛИЧНЫЙ КАБИНЕТ
                </UIText>
                <UIText type={"dark"} onClick={() => navigate(ERROR_NOT_YET_ROUTE)}
                >
                    партнеры
                </UIText>
                <UIText type={"dark"} onClick={() => navigate(ERROR_NOT_YET_ROUTE)}
                >
                    сообщество
                </UIText>
                <UIText type={"dark"} onClick={() => navigate(ERROR_NOT_YET_ROUTE)}
                >
                    faq
                </UIText>
                <UIText type={"dark"} onClick={() => navigate(ERROR_NOT_YET_ROUTE)}
                >
                    каталог
                </UIText>

            </div>
        </div>
    );
};

export default HeaderBackDrop;