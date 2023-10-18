import * as S from '../../assets/Styles/Styles.js';
import Logo from '../../assets/Images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import React from 'react';

const Nav = () => {
const navigate = useNavigate();
const HandleHome = () => {
    navigate('/')
}
    return (
        <>
        <S.NavHeader>
       <img src={Logo} onClick={HandleHome} className='Logo'/>  
        <ul>
            <li>Empresa</li>
            {/* <li>Favoritos</li> */}
            <li>Contato</li>
            <li>Lançamentos</li>
        </ul>

        <S.UserDivHeader>
         <Link to="/register">Cadastro</Link>   
         {/* <Link to="/Login">Login</Link>    */}
        </S.UserDivHeader>
        
        </S.NavHeader>
        </>
    );
};

export default Nav;