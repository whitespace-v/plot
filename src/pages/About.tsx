import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import USlide from "../hoc/Utilits/USlide";
import AboutContent from "../components/About/AboutContent";

const About = () => {

    useEffect(() => {
        document.title = "ПЛОТ - О нас"
    }, [])

    return (
        <>
            <Header back={"marsh"}/>
            <AboutContent/>
            <Footer/>
            <USlide/>
        </>
    );
};

export default About;