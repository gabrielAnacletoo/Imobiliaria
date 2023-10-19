import * as S from '../../assets/Styles/Styles.js';
import Logo from '../../assets/Images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import React, {ReactNode }from 'react';


interface NavProps {
    handleNavigation: (page: string | null) => void;
  }
  
  const Nav = ({ handleNavigation }: NavProps) => {
    const navigate = useNavigate();

  
    return (
      <>
        <S.NavHeader>
          <img src={Logo} onClick={() => handleNavigation(null)} className='Logo'/>  
          <ul>
            <li onClick={() => handleNavigation('empresa')}>Empresa</li>
            <li onClick={() => handleNavigation('contato')}>Contato</li>
            <li onClick={() => handleNavigation('lancamentos')}>Lançamentos</li>
          </ul>
  
          <S.UserDivHeader>
            <Link to="/register">Cadastro</Link>   
          </S.UserDivHeader>
        </S.NavHeader>
      </>
    );
  };

export default Nav;