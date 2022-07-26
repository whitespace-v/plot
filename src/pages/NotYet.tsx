import React, {useEffect} from 'react';
import NotYetContent from "../components/NotYet/NotYetContent";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const NotYet = () => {

    useEffect(() => {
        document.title = "ПЛОТ - В разработке!"
        window.scroll(0,0)
    }, []);

    return (
        <>
            <Header back={"rainy"}/>
            <NotYetContent/>
            <Footer/>
        </>
    );
};

export default NotYet;