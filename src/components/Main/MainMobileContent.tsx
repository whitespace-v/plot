import React from 'react';
import classes from '../../styles/Main/MainMobileContent.module.scss'
import image0 from '../../assets/static/main/mobileIcon0.png'
import image1 from '../../assets/static/main/mobileIcon1.png'
import image2 from '../../assets/static/main/mobileIcon2.png'

const MainMobileContent = () => {
    return (
        <div className={classes['MainMobileContent']}>
            <div className={classes['MainMobileContent-title']}>
                О нас
            </div>
            <div className={classes['MainMobileContent__info']}>
                <div className={classes['MainMobileContent__info-block']}>
                    <img src={image2} alt=""/>
                    <p className={classes['MainMobileContent__info-block-title']}>Наша задача - Ваш профессионализм</p>
                    <p className={classes['MainMobileContent__info-block-text']}>
                        Формирование профессиональных качеств
                        будущего сотрудника транспортной отрасли
                        с помощью решения интерактивных задач,
                        основанных на практическом опыте работы
                        существующих специалистов.
                    </p>
                </div>
                <div className={classes['MainMobileContent__info-block']}>
                    <img src={image0} alt=""/>
                    <p className={classes['MainMobileContent__info-block-title']}>Учись играя</p>
                    <p className={classes['MainMobileContent__info-block-text']}>
                        Мы активно работаем над внедрением
                        интерактивных форм обучениия. Во всех
                        наших модулях вам предстоит проявить
                        свою смекалку и полученные знания в
                        игровой форме, а для лучшего закрепления
                        материала и приобретения профессиональных
                        навыков на платформе представлены деловые игры.
                    </p>
                </div>
                <div className={classes['MainMobileContent__info-block']}>
                    <img src={image1} alt=""/>
                    <p className={classes['MainMobileContent__info-block-title']}>Узнавай и развивайся</p>
                    <p className={classes['MainMobileContent__info-block-text']}>
                        Сообщество ПЛОТ - это самая
                        актуальная информацию из мира
                        транспортных перевозок, интересные
                        статьи и публикации, анонсы мероприятий
                        и многое другое. Будь в курсе событий вместе с ПЛОТ!
                    </p>
                </div>

            </div>
        </div>
    );
};

export default MainMobileContent;