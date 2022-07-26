import React from 'react';
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface IHeader{
    back: 'rainy' | 'marsh'
}

const Header = (props: IHeader) => {
    const {width} = useWindowDimensions()
    return (
        width > 1599 ?
            <HeaderDesktop back={props.back}/>
            :
            <HeaderMobile/>
    );
};

export default Header;
