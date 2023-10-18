import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from '../../assets/Images/ap7.jpg'
import Image2 from '../../assets/Images/ap8.jpg'
import Image3 from '../../assets/Images/ap9.jpg'
import Image4 from '../../assets/Images/image4.jpg'
import * as S from '../../assets/Styles/Styles'

const data = [
    {id:1, image: Image1 },
    {id:2, image: Image2 },
    {id:3, image: Image3 },
    {id:4, image: Image4 }
]

const SwiperHome = () => {
    return (
        <S.DivSwiper>
        <Swiper
        slidesPerView={1}
        pagination={{clickable: true}}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        >
            {data.map( (item) => (
                 <SwiperSlide key={item.id}>
                <img
                src={item.image} 
                alt="slider"
                className="Slider"
                />
              </SwiperSlide>
            ))}
        </Swiper>
        </S.DivSwiper>
    )
}

export default SwiperHome;