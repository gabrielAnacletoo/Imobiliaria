import React , { useState } from 'react';
import * as S from '../../assets/Styles/Styles'




const Details = () => {
const [rangeValue, setRangeValue] = useState(10000)

const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setRangeValue(newValue);
  }

    return (
        <>
        <S.Details>    
        <S.LabelDiv>
        <p>BUSCA DETALHADA</p>
        </S.LabelDiv>
            
        <S.DetailsInputs>
        <div> 
        <p>O que você precisa?</p> 
        <select>
        <option value="Alugar" selected>Alugar</option>
        <option value="Comprar">Comprar</option>
        <option value="Comprar ou alugar">Comprar ou alugar</option>
        </select>
        </div>

        <div>
        <p>Qual tipo?</p> 
        <select>
        <optgroup label="Residencial">
        <option value="opcao1" selected  hidden>Qualquer Tipo</option>
        <option value="opcao1">Apartamentos</option>
        <option value="opcao2">Casas</option>
        <option value="opcao2">Casas em condomínios</option>
        <option value="opcao2">Chácara</option>
        <option value="opcao2">Fazenda</option>
        <option value="opcao2">Sobreloja</option>
        <option value="opcao2">Terrenos</option>
        <option value="opcao2">Terrenos em condomínios</option>
        </optgroup>
        <optgroup label="Comercial">
        <option value="opcao2">Todos os Comerciais</option>
        <option value="opcao2">Apartamentos</option>
        <option value="opcao2">Barração</option>
        <option value="opcao2">Casas</option>
        <option value="opcao2">Loja</option>
        <option value="opcao2">Sala</option>
        <option value="opcao2">Salão</option>
        <option value="opcao2">Terrenos</option>
        <option value="opcao2">Terrenos em condomínios</option>
        </optgroup>
        </select>
        </div>

        <div>
        <p>Cidade</p> 
        <select>
        <option value="opcao1" selected>Bauru</option>
        <option value="otherOption">Avaré</option>
        <option value="otherOption">Marilia</option>
        <option value="otherOption">Pederneiras</option>
        <option value="otherOption">Agudos</option>
        </select>
        </div>
    
        <div>
        <p>Bairro</p> 
        <select>
        <option value="someOption" selected  hidden>Qualquer Bairro</option>
        <option value="someOption">Some option</option>
        <option value="otherOption">Other option</option>
        </select>
        </div>
     
        </S.DetailsInputs>

        <S.DetailsInputs>
        <div>
        <p>Prédio </p> 
        <select>
        <option value="someOption" selected  hidden>Qualquer prédio</option>
        <option value="someOption">Some option</option>
        <option value="otherOption">Other option</option>
        </select> 
        </div>
      
        <S.InputEndereço>
        <p>Endereço (Apenas o Nome)</p> 
        <input type="text" placeholder='Ex: Cruzeiro do sul' />
        </S.InputEndereço>
      
        <div>
        <p>Quartos</p> 
        <select>
        <option value="someOption" selected  hidden>Quartos</option>
        <option value="someOption">1</option>
        <option value="otherOption">2</option>
        <option value="otherOption">3</option>
        <option value="otherOption">4 ou mais</option>
        </select>
        </div>
      
        <div>
        <p>Vagas</p> 
        <select>
        <option value="someOption" selected hidden>Vagas</option>
        <option value="someOption">Some option</option>
        <option value="otherOption">Other option</option>
        </select>
        </div>
   
    
    
        </S.DetailsInputs>

        <S.DetailsInputs>
        <S.DivInputRange>
        <p className='InputRange'>
            Faixa de Valor: R$ 0 até R$ {rangeValue !== 10000 ? rangeValue : `${rangeValue} mil`}
        </p>
        <input type="range" min={0} max={10000} value={rangeValue} onChange={handleRangeChange} />
        </S.DivInputRange>

    
        <div>
        <p> Ordenar Por </p> 
        <select>
        <option value="someOption">Some option</option>
        <option value="otherOption">Other option</option>
        </select>
        </div>
   
        <div>
        <p> Código do Imóvel </p> 
        <select>
        <option value="someOption">Some option</option>
        <option value="otherOption">Other option</option>
        </select>
        </div>
        

        </S.DetailsInputs>

        <S.DetailsCheckBox>
       <input type='checkbox' /> <span>Mobiliado</span>
       <input type='checkbox' /> <span>Piscina</span>
        
       <input type='checkbox' /> <span>Varanda Gourmet</span>
       <input type='checkbox' /> <span>Visita Virtual</span>
        
       <input type='checkbox' /> <span>Edícula</span>
       <input type='checkbox' /> <span>Ar Condicionado</span>
        
       <input type='checkbox' /> <span>Academia</span>
       <input type='checkbox' /> <span>Playground</span>
        
       <input type='checkbox' /> <span>Suíte</span>
       <input type='checkbox' /> <span>Elevador</span>

      
        </S.DetailsCheckBox>
        <S.DivBtn>
        <button> BUSCAR </button>
        </S.DivBtn>

        </S.Details>
        </>
    );
};

export default Details;