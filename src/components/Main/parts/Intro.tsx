import React from 'react';
import classes from '../styles/Intro.module.scss'

const Intro = () => {
    return (
        <div className={classes['Intro']}>
            <div className={classes['Intro__naming']}>
                <span className={classes['Intro__naming_fl']}>П</span>латформа <br/>
                <span className={classes['Intro__naming_fl']}>Л</span>огистики и <br/>
                <span className={classes['Intro__naming_fl']}>О</span>снов <br/>
                <span className={classes['Intro__naming_fl']}>Т</span>ранспорта <br/>
            </div>
        </div>
    );
};

export default Intro;