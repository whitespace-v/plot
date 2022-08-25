import React from 'react';
import classes from '../../styles/UIKit/UIButton.module.scss'

interface IUIButton {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    type: 'active' | 'disabled' | 'green';
}

const UIButton = (props: IUIButton) => {
    const cls = [classes['UIButton'], classes[props.type]]
    return (
        <div className={cls.join(' ')} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default UIButton;