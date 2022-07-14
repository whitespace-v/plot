import React from 'react';
import classes from '../../styles/About/AboutInfo.module.scss'
import image from '../../assets/static/about/video_thumbnail.png'
import UIButton from "../../hoc/UIKit/UIButton";

const AboutInfo = () => {
    return (
        <div className={classes['AboutInfo']}>

            <div className={classes['AboutInfo__marsh']}/>
            <div className={classes['AboutInfo__primary']}/>
            <div className={classes['AboutInfo__plate']}>

                <div className={classes['AboutInfo__plate-block']}>
                    <p className={classes['AboutInfo__plate-block-title']}>
                        О нас
                    </p>
                    <p className={classes['AboutInfo__plate-block-text']}>
                        Обучаясь в университете, наша команда из 5 человек твёрдо и чётко поняла, что студенты должны помогать друг другу в изучении транспортных наук и объяснять темы не только словами и формулами, а графиками, рисунками, видео, презентациями, задачками и другого рода интерактивными взаимодействиями.
                    </p>
                    <p className={classes['AboutInfo__plate-block-text']}>
                        Наша задача поднять уровень интереса к транспортной логистике в целом и разнообразить процесс обучения у студентов и школьников с помощью использования интерактивных интернет-ресурсов.
                    </p>
                    <p className={classes['AboutInfo__plate-block-text']}>
                        Команда ПЛОТ не действует в одиночку, для работы над содержанием платформы привлекаются крупные транспортно-экспедиторские компании, которые готовы поделиться практическим опытом с будущим поколением транспортных специалистов.
                    </p>
                    <div className={classes['AboutInfo__plate-block-button']}>
                        <UIButton type={"active"} onClick={() => {}}>Подробнее</UIButton>
                    </div>
                </div>
                <div className={classes['AboutInfo__plate-image']}>
                    <img src={image} alt=""/>
                </div>

            </div>

        </div>
    );
};

export default AboutInfo;