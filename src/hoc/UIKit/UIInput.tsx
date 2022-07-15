import React from 'react';
import classes from "../../styles/UIKit/UIInput.module.scss";

interface IUIInput{
    placeholder: string;
    type: 'dark' | 'white';
}

const UIInput = (props: IUIInput) => {
    const cls = [classes['UIInput'], classes[props.type]]
    return (
        <input className={cls.join(' ')} placeholder={props.placeholder}/>
    );
};

export default UIInput;