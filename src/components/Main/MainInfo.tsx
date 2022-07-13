import React from "react";
import classes from "../../styles/Main/MainInfo.module.scss";
import img0 from "../../assets/static/main/info0.png";
import img1 from "../../assets/static/main/info1.png";
import UIButton from "../../hoc/UIKit/UIButton";

const MainInfo = () => {
  return (
      <div className={classes["MainInfo"]}>

        <div className={classes["MainInfo__block"]}>
          <div className={classes["MainInfo__block-image"]}>
            <img src={img0} alt="" />
            <div className={classes["MainInfo__block-image-space"]}/>
          </div>
          <div className={classes["MainInfo__block-text"]}>
            <div className={classes['MainInfo__block-text-content']}>
              <p className={classes["MainInfo__block-text-content-title"]}>
                Прямой контакт с будущими работодателями
              </p>
              <p className={classes["MainInfo__block-text-content-paragraph"]}>
                Миссия нашего проекта заключается в разработке интернет-платформы,
                которая поможет будущим специалистам и существующим работодателям
              </p>
              <p className={classes["MainInfo__block-text-content-title"]}>
                Возможнсть зарекомендовать себя
              </p>
              <p className={classes["MainInfo__block-text-content-paragraph"]}>
                Платформа позволяет подготовить будущих сотрудников заранее, на
                стадии их обучения в университете и даже раньше, по тем требованиям
                знаний, которые необходимы для работы в транспортной компании
              </p>
              <div className={classes["MainInfo__block-text-button"]}>
                <UIButton type="active" onClick={() => {}}>
                  Партнёры
                </UIButton>
              </div>
            </div>
          </div>
        </div>

        <div className={classes["MainInfo__block"]}>
          <div className={classes["MainInfo__block-text"]}>
            <div className={classes["MainInfo__block-text-content"]}>
              <p className={classes["MainInfo__block-text-content-title"]}>
                Прямой контакт с будущими работодателями
              </p>
              <p className={classes["MainInfo__block-text-content-paragraph"]}>
                Помимо этого ПЛОТ это не только обучение, но и сообщество всех тех,
                кто желает связать свою жизнь с транспортом и перевозками!
              </p>
              <p className={classes["MainInfo__block-text-content-paragraph"]}>
                Сообщество ПЛОТ это в будущем более 10000 человек, которые
                ежедневно делятся своим мнением, новостями и статьями по поводу всех
                транспортных аспектов как в стране, так и зарубежом.
              </p>
              <div className={classes["MainInfo__block-text-content-button"]}>
                <UIButton type="active" onClick={() => {}}>
                  Партнёры
                </UIButton>
              </div>
            </div>
          </div>
          <div className={classes["MainInfo__block-image"]}>
            <img src={img1} alt="" />
            <div className={classes["MainInfo__block-image-space"]}/>
          </div>
        </div>
      </div>
  );
};

export default MainInfo;
