import React from 'react';
import classes from '../../styles/About/AboutValues.module.scss'

const AboutValues = () => {
    return (
        <div className={classes['AboutValues']}>
            <p className={classes['AboutValues__text']}>
                Движение, технология, логистика - основополагающие части транспортной науки, которую вам предстоит изучить по новой.
            </p>
            <p className={classes['AboutValues__subtext']}>
                БУДЬ С НАМИ!
            </p>
            <p className={classes['AboutValues__title']}>
                Наши ценности
            </p>
            <div className={classes['AboutValues__raw']}>
                <div className={classes['AboutValues__raw-block']}>
                    <p className={classes['AboutValues__raw-block-number']}>
                        1
                    </p>
                    <div className={classes['AboutValues__raw-block-text']}>
                        <div className={classes['AboutValues__raw-block-text-title']}>
                            Наша задача-Ваш успех и профессионализм
                        </div>
                        <div className={classes['AboutValues__raw-block-text-text']}>
                            Специально для улучшения качества обучающего материала мы сотрудничаем и активно привлекаем к созданию модулей ведущих специалистов и лидеров транспортной отрасли.
                        </div>
                    </div>
                </div>
                <div className={classes['AboutValues__raw-block']}>
                    <p className={classes['AboutValues__raw-block-number']}>
                        2
                    </p>
                    <div className={classes['AboutValues__raw-block-text']}>
                        <div className={classes['AboutValues__raw-block-text-title']}>
                            Учись играя
                        </div>
                        <div className={classes['AboutValues__raw-block-text-text']}>
                            Мы активно работаем над внедрением интерактивных форм обучениия. Во всех наших модулях вам предстоит проявить свою смекалку и полученные знания в игровой форме, а для лучшего закрепления материала и приобретения профессиональных навыков на платформе представлены деловые игры.
                        </div>
                    </div>
                </div>
                <div className={classes['AboutValues__raw-block']}>
                    <p className={classes['AboutValues__raw-block-number']}>
                        3
                    </p>
                    <div className={classes['AboutValues__raw-block-text']}>
                        <div className={classes['AboutValues__raw-block-text-title']}>
                            Узнавай и развивайся
                        </div>
                        <div className={classes['AboutValues__raw-block-text-text']}>
                            Сообщество ПЛОТ - это самая актуальная информацию из мира транспортных перевозок, интересные статьи и публикации, анонсы мероприятий и многое другое. Будь в курсе событий вместе с ПЛОТ!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutValues;