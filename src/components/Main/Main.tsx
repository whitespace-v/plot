import React from 'react';
import MainIntro from "./MainIntro";
import MainActions from "./MainActions";
import MainSystem from "./MainSystem";
import MainInfo from './MainInfo';

const Main = () => {
    return (
        <>
            <MainIntro/>
            <MainActions/>
            <MainSystem/>
            <MainInfo/>
        </>
    );
};

export default Main;