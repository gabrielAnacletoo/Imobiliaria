import * as S from '../../assets/Styles/Styles'
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from '../../assets/Images/Apartamentos/ap1.jpg'
import Image2 from '../../assets/Images/Apartamentos/ap2.jpg'
import Image3 from '../../assets/Images/Apartamentos/ap3.jpg'
import Car from '../../assets/Images/Apartamentos/carro.png'
import Bed from '../../assets/Images/Apartamentos/cama-de-solteiro.png'
import Pool from '../../assets/Images/Apartamentos/natacao.png'
import Gym from '../../assets/Images/Apartamentos/academia.png'


const data = [
    {id: 1, image: Image1},
    {id: 2, image: Image2},
    {id: 3, image: Image3},
    {id: 4, image: Image3},
    {id: 5, image: Image1},
    {id: 6, image: Image3},
    {id: 7, image: Image2},
    {id: 8, image: Image3},
    {id: 9, image: Image2},
    {id: 10, image: Image1},
    {id: 11, image: Image3},
    {id: 12, image: Image1},
    {id: 13, image: Image3},
    {id: 14, image: Image1},
]
const Valor = 1800

const Highlight = () => {
    return (
        <>
        <S.HighlightTitle>
        <h2>DESTAQUES</h2>
        <p>Nossas sugestões de imóveis na cidade de Bauru.</p>
        <div className="linhaVermelha"></div>
        </S.HighlightTitle>
        
        <S.HighlightContent>
        <Swiper
        slidesPerView={3}
        spaceBetween={50}
        pagination={{clickable: true}}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        >
            {data.map( (item) => (
                 <SwiperSlide key={item.id} style={{padding: '10px'}}>
                <S.DivApartamentos>
                <img
                src={item.image} 
                alt="slider"
                className="SliderHighLights"
                />
                <S.InfoHighlights>
                <p>Centro</p> <p className='valor'>R$ {Valor.toLocaleString('pt-BR')}</p>
                {/* R$ ${item.valor.toLocaleString('pt-BR')} */}
                </S.InfoHighlights>
                  
                <S.InfoHighlights>
                 
                    <div><img src={Car} style={{verticalAlign: 'middle'}} title='Vagas na garagem'/> <span> 1</span></div>
                    <div><img src={Bed} style={{verticalAlign: 'middle'}} title='Quartos'/> <span>3</span></div>
                    <div><img src={Pool} style={{verticalAlign: 'middle'}} title='Piscina'/></div>
                    <div><img src={Gym} style={{verticalAlign: 'middle'}} title='Academia'/></div>
                               
                </S.InfoHighlights>
                <span>Cód 464654</span>
                </S.DivApartamentos>
              </SwiperSlide>
            ))}
        </Swiper>
        </S.HighlightContent>
        </>
    )
}

export default Highlight;