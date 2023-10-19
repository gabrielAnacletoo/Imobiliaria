import * as S from '../assets/Styles/Styles';
import Nav from "../components/Headers/Nav";
import SwiperHome from '../components/Swiper/Swiper';
import Details from '../components/Filters/Details';
import Highlight from '../components/Hilights/Highlight';
import Footer from '../components/Footer/Footer';
import React from 'react';
import Empresa from '../components/Empresa/Empresa';
import Lancamentos from '../components/Lancamentos/Lancamentos';
import Contato from '../components/Contato/Contato';


const Template = () => {
    const [currentPage, setCurrentPage] = React.useState(null);
  
    const handleNavigation = (page:any) => {
      setCurrentPage(page)
    }
  
    return (
      <>
        <S.ContainerTemplate>
          <Nav handleNavigation={handleNavigation} />
          {currentPage === null && (
            <>
              <SwiperHome />
              <Details />
              <Highlight />
            </>
          )}
          {currentPage === 'empresa' && <Empresa />}
          {currentPage === 'contato' && <Contato />}
          {currentPage === 'lancamentos' && <Lancamentos />}
          <Footer />
        </S.ContainerTemplate>
      </>
    )
  }

export default Template;