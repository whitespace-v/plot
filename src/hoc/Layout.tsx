import React from 'react';
import classes from './Layout.module.scss'

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={classes['Layout']}>
            {children}
        </div>
    );
};

export default Layout;