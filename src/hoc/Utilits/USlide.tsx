import React from 'react';
import classes from '../../styles/Utilits/USlide.module.scss'
import arrow from '../../assets/static/helpers/Arrow.svg'
import UIButton from "../UIKit/UIButton";

const USlide = () => {
    return (
        <div className={classes['USlide']}>
            <UIButton onClick={() => window.scroll(0, 0)} type={"active"}>
                <img src={arrow} alt=""/>
            </UIButton>
        </div>
    );
};

export default USlide;