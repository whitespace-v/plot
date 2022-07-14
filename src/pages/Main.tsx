import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import USlide from "../hoc/Utilits/USlide";
import MainContent from "../components/Main/MainContent";

const Main = () => {
    return (
        <>
            <Header back={"rainy"}/>
            <MainContent />
            <Footer/>
            <USlide/>
        </>
    );
};

export default Main;