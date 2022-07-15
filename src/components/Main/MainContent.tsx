import React from 'react';
import MainIntro from "./MainIntro";
import MainActions from "./MainActions";
import MainSystem from "./MainSystem";
import MainInfo from './MainInfo';
import MainFooter from "./MainFooter";

const MainContent = () => {
    return (
        <>
            <MainIntro/>
            <MainActions/>
            <MainSystem/>
            <MainInfo/>
            <MainFooter/>
        </>
    );
};

export default MainContent;