import * as S from '../../assets/Styles/Styles' 
import { Link } from 'react-router-dom'


const Contato = () => {
    return (
        <>
         <S.FaleConoscoContainer>
        <p>CONTATO</p> 

        <S.DivForm>
        <S.FaleConosco>
        <span className='Topo'>FALE CONOSCO</span>
        <input type="text" placeholder='Nome'/>
        <input type="text" placeholder='Telefone'/>
        <input type="text" placeholder='Cidade'/>
        <input type="text" placeholder='E-mail'/>
        <input type="text" placeholder='Assunto'/>
        <select >
        <option value="Selecione a área" selected hidden>Selecione a área</option>
        <option value="">Boleto</option>
        <option value="">Entrega de imóvel</option>
        <option value="">Financeiro</option>
        <option value="">Jurídico</option>
        <option value="">Locação</option>
        <option value="">Manutenção</option>
        <option value="">Vendas</option>
        </select>
        <textarea cols={100} rows={10}/>
        </S.FaleConosco>
       
        <S.Setores>
        <span className='Topo'>SETORES</span>
        </S.Setores>
        
        </S.DivForm>
     
        </S.FaleConoscoContainer>    
        
      

  
        </>
    )
}

export default Contato;