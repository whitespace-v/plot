import React from 'react';
import classes from "../../styles/Demo/DemoContent.module.scss";
import UIButton from "../../hoc/UIKit/UIButton";
import {useLockBodyScroll} from "../../hooks/useLockBodyScroll";

const DemoNotification = ({setNotification} : {setNotification: (b: boolean) => void}) => {
    useLockBodyScroll()
    return (
        <div className={classes['Greetings']}>
            <div className={classes['Greetings__title']}>
                Приветствие
            </div>
            <div className={classes['Greetings__text']}>
                Здравствуйте, уважаемые пользователи!
                Это первый модуль для демонстрации обучающего процесса на платформе “ПЛОТ”. В данном модуле Вы ознакомитесь с принципиальными основами морского контейнерного терминала, узнаете о истории возникновения первого порта и контейнера, погрузитесь в оригинальную историю о молодом стивидоре
                и решите пару интерактивных задач.
                <br/><br/>
                Надеемся, что демо-модуль заинтересует Вас остаться на ПЛОТу!
                <br/>
                Среднее время прохождения демо-модуля составляет 10-15 минут.
                Желаем удачи!
            </div>
            <div className={classes['Greetings__button']}>
                <UIButton type={'green'} onClick={() => setNotification(false)}>НАЧАТЬ</UIButton>
            </div>

        </div>
    );
};

export default DemoNotification;