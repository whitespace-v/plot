import React from 'react';
import classes from "../../styles/UIKit/UIText.module.scss";

interface IUIText{
    type: 'dark' | 'white'
    children: React.ReactNode
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const UIText = (props: IUIText) => {
    const cls = [classes['UIText'], classes[props.type]]
    return (
        <div className={cls.join(' ')} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default UIText;