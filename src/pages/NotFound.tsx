import React, {useEffect} from 'react';
import NotFoundContent from "../components/NotFound/NotFoundContent";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const NotFound = () => {

    useEffect(() => {
        document.title = "ПЛОТ - Не найдено :("
        window.scroll(0,0)
    }, []);

    return (
        <>
            <Header back={"rainy"}/>
            <NotFoundContent/>
            <Footer/>
        </>
    );
};

export default NotFound;