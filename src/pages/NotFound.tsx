import React from 'react';
import NotFoundContent from "../components/NotFound/NotFoundContent";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const NotFound = () => {
    return (
        <>
            <Header back={"rainy"}/>
            <NotFoundContent/>
            <Footer/>
        </>
    );
};

export default NotFound;