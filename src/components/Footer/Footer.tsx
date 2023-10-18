import * as S from '../../assets/Styles/Styles'
import Logo from '../../assets/Images/Logo.png'
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";


const Footer = () => {
    return (
        <>
        <S.WarningFooter>
            <p>Os valores dos condomínios exibidos nos Detalhes do Imóvel estão sujeitos à modificações.</p>
        </S.WarningFooter>

        <S.MiddleContent>
        <h1> Alugar apartamentos em São paulo?</h1>
      
        <h3>
ENCONTRE APARTAMENTOS PRÓXIMOS ÀS UNIVERSIDADES DE XXXXX: USP, UNESP, UNISAGRADO, FIB, UNINOVE, UNIP, ANHANGUERA.
        </h3>
        </S.MiddleContent>

        <S.EndFooter>

        <S.EndContent>

<img src={Logo} className='logo'/>

<p>Somos uma empresa tradicional, situada na cidade de XXXXXX, que opera no ramo imobiliário há XX anos, atendendo os mais variados segmentos: estudantes, famílias, comerciantes e empresários.</p>
<br/>
<p><b>PARCEIROS</b></p>
<p>Condomínios & Condomínios</p>
<p>Condomínios & Condomínios</p>
<p>Condomínios & Condomínios</p>
<p>Condomínios & Condomínios</p>
<br/>
<p><b>SIGA-NOS</b></p>

<span>
<AiFillFacebook style={{fontSize: '25px'}}/>
<AiFillInstagram style={{fontSize: '25px'}}/>
</span>

</S.EndContent>

<S.EndContent>

<p><b>UNIDADES</b></p><br/>
<p>UNIDADE CENTRO</p>
<p> (11) 3131-7272</p>
<p> contato@contato.com.br</p>
<p> Praça Rodrigues de Abreu, 4-40</p>
<br/>
<p>UNIDADE 2</p>
<p> (11) 3131-7272</p>
<p> contato@contato.com.br</p>
<p> Praça Rodrigues de Abreu, 4-40</p>
<br/>
<p>UNIDADE 3</p>
<p> (11) 3131-7272</p>
<p> contato@contato.com.br</p>
<p> Praça Rodrigues de Abreu, 4-40</p>
<br/>
<p>UNIDADE 4</p>
<p> (11) 3131-7272</p>
<p> contato@contato.com.br</p>
<p> Praça Rodrigues de Abreu, 4-40</p>
<br/>

 </S.EndContent>

 <S.EndContent>
 <p><b> RECEBA AS NOVIDADES</b></p><br/>
 <p>Fique por dentro das ofertas e novidades.</p>
 <p>Aproveite todos os recursos de nosso site!</p>
  <button>Quero Me Cadastrar</button>


 </S.EndContent>

        </S.EndFooter>
        </>
    )
}

export default Footer;