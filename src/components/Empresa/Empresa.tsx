import * as S from '../../assets/Styles/Styles' 
import LogoClient from '../../assets/Images/logoclient.png'
import { Link } from 'react-router-dom'


const Empresa = () => {
    return (
        <>
        <S.ContainerEmpresa>
            <p>EMPRESA</p> 
      

        <S.EmpresaContent>
        <div style={{display: 'flex', alignItems: 'center', width: '40%'}}><img src={LogoClient} alt="Logo imobiliraria vinca" style={{width: '70%'}}/></div>

        <div style={{width: '35%'}}>
        <span style={{fontSize: '12px'}}>
        TRADIÇÃO, MODERNIDADE E CREDIBILIDADE!
        Somos uma empresa tradicional, situada na cidade de XXXXX, que opera no ramo imobiliário há mais de XX anos,
        atendendo os mais variados segmentos: estudantes, famílias, comerciantes, empresários, etc. Nossos funcionários
        são selecionados para melhor atendê-lo, com competência e profissionalismo, sempre procurando a concretização 
        do negócio na melhor forma possível.
        <br/>
        Possuímos os setores administrativo, financeiro, jurídico e de cobrança agregados aos nossos departamentos de 
        locação e vendas. Em nosso setor de locação, contamos com sistema digitalizado para melhor visualização do imóvel,
        proporcionando comodidade e otimização de tempo aos interessados antes da visita do imóvel, buscando sempre
        modernizar e inovar nossos processos. No setor de vendas, os corretores selecionados garantem sucesso e 
        tranquilidade na realização dos negócios, sempre amparados pelo setor jurídico.
        </span><br/>
        <Link to="/register"><button>FALE COM NOSSA EQUIPE!</button></Link>
        
        </div>

        </S.EmpresaContent>    
        </S.ContainerEmpresa>       
        </>
    )
}

export default Empresa;