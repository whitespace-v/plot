import React from 'react';
import AboutIntro from "./AboutIntro";
import AboutInfo from "./AboutInfo";
import AboutValues from "./AboutValues";
import AboutNews from "./AboutNews";
import AboutHelp from "./AboutHelp";

const AboutContent = () => {
    return (
        <>
            <AboutIntro/>
            <AboutInfo/>
            <AboutValues/>
            <AboutNews/>
            <AboutHelp/>
        </>
    );
};

export default AboutContent;