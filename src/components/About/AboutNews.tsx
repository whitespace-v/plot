import React from 'react';
import classes from '../../styles/About/AboutNews.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import UIText from "../../hoc/UIKit/UIText";
import item0 from '../../assets/static/about/news_item0.png'
import item1 from '../../assets/static/about/news_item1.png'
import item2 from '../../assets/static/about/news_item2.png'

const AboutNews = () => {

    return (
        <div className={classes['AboutNews']}>
            <p className={classes['AboutNews__title']}>
                Последние новости
            </p>
            <div className={classes['AboutNews__slider']}>
                <Swiper
                    spaceBetween={0} slidesPerView={3} loop autoplay
                    className={classes['AboutNews__slider-container']}
                >
                    <SwiperSlide className={classes['slide']}>
                        <div className={classes['slide__content']}>
                            <div className={classes['slide__image']}
                                 style={{
                                     backgroundImage: `url(${item0})`
                                 }}
                            />
                            <div className={classes['slide__text']}>
                                <p className={classes['slide__text-title']}>
                                    Второе место на Всероссийском конкурсе молодых предпринимателей
                                </p>
                                <p className={classes['slide__text-text']}>
                                    Диплом и кубок за 2 место в общекомандном зачете Всероссийского конкурса молодых предпринимателей в 2020 году вручены команде ПЛОТ...
                                </p>
                                <div className={classes['slide__text-info']}>
                                    <p className={classes['slide__text-info-date']}>
                                        23 марта 2021
                                    </p>
                                    <div className={classes['slide__text-info-button']}>
                                        <UIText type={'white'}>
                                            Подробнее
                                        </UIText>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={classes['slide']}>
                        <div className={classes['slide__content']}>
                            <div className={classes['slide__image']}
                                 style={{
                                     backgroundImage: `url(${item1})`
                                 }}
                            />
                            <div className={classes['slide__text']}>
                                <p className={classes['slide__text-title']}>
                                    Релиз демо-модуля
                                </p>
                                <p className={classes['slide__text-text']}>
                                    Дорогие друзья, мы рады сообщить Вам отличную новость! Прямо сейчас на нашем сайте доступен пробный модуль...
                                </p>
                                <div className={classes['slide__text-info']}>
                                    <p className={classes['slide__text-info-date']}>
                                        1 марта 2022
                                    </p>
                                    <div className={classes['slide__text-info-button']}>
                                        <UIText type={'white'}>
                                            Подробнее
                                        </UIText>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={classes['slide']}>
                        <div className={classes['slide__content']}>
                            <div className={classes['slide__image']}
                                 style={{
                                     backgroundImage: `url(${item2})`
                                 }}
                            />
                            <div className={classes['slide__text']}>
                                <p className={classes['slide__text-title']}>
                                    Студенты ФУМТЭ по достоинству оценили проект ПЛОТ
                                </p>
                                <p className={classes['slide__text-text']}>
                                    в МГУ им. адм. Г.И. Невельского студенческая команда ПЛОТ  провели демонстрационную презентацию первого модуля платформы...
                                </p>
                                <div className={classes['slide__text-info']}>
                                    <p className={classes['slide__text-info-date']}>
                                        3 марта 2022
                                    </p>
                                    <div className={classes['slide__text-info-button']}>
                                        <UIText type={'white'}>
                                            Подробнее
                                        </UIText>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default AboutNews;