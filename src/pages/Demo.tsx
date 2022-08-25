import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DemoContent from "../components/Demo/DemoContent";

const Demo = () => {
    useEffect(() => {
        document.title = "ПЛОТ - Демо модуль"
    }, [])
    return (
        <>
            <Header back={"rainy"}/>
            <DemoContent/>
            <Footer/>
        </>
    );
};

export default Demo;