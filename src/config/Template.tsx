import * as S from '../assets/Styles/Styles';
import Nav from "../components/Headers/Nav";
import SwiperHome from '../components/Swiper/Swiper';
import Details from '../components/Filters/Details';
import Highlight from '../components/Hilights/Highlight';
import Footer from '../components/Footer/Footer';
import React from 'react';

const Template = () => {
    return (
        <>
        <S.ContainerTemplate>
        <Nav />
        <SwiperHome/>
        <Details />
        <Highlight />
        <Footer />
        </S.ContainerTemplate>
        </>
    );
};

export default Template;