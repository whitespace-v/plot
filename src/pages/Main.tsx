import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import USlide from "../hoc/Utilits/USlide";
import MainContent from "../components/Main/MainContent";
import MainMobile from "../components/Main/MainMobile";
import useWindowDimensions from "../hooks/useWindowDimensions";
import AboutNews from "../components/About/AboutNews";

const Main = () => {

    useEffect(() => {
        document.title = "ПЛОТ - Главная"
    }, []);
    const {width} = useWindowDimensions()
    return (
        <>
            <Header back={"rainy"}/>
            { width > 1599 ?
                <MainContent /> : <MainMobile/>
            }
            { width < 1599 &&
                <AboutNews/>
            }
            <Footer/>
            <USlide/>
        </>
    );
};

export default Main;