import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination,Navigation,Autoplay,EffectCards } from "swiper";

import Steven from '../assets/Nfts/StevenUpdate.png'
import Img1 from '../assets/Nfts/bighead-1.svg'
import Img2 from '../assets/Nfts/bighead-2.svg'
import Img3 from '../assets/Nfts/bighead-3.svg'
import Img4 from '../assets/Nfts/bighead-4.svg'
import Img5 from '../assets/Nfts/bighead-5.svg'
import Img6 from '../assets/Nfts/bighead-6.svg'
import Img7 from '../assets/Nfts/bighead-7.svg'
import Img8 from '../assets/Nfts/bighead-8.svg'

import Arrow from '../assets/Arrow.svg'

const Container = styled.div`
width:25vw ;
height:50vh ;

.swiper{
    width:100% ;
    height:100% ;
}
.swiper-slide{
    background-color: ${prop => prop.theme.carouselColor} ;
    border-radius:20px ;

    display: flex;
    justify-content: center;
    align-items: center;
}
.swiper-button-next{
  color:${prop => prop.theme.text} ;
  right:0 ;
  width:4rem ;
  top:60%;
  background-image: url(${Arrow});
  background-position:center ;
  background-size:cover ;

  &:after{
    display:none ;
  }
}
.swiper-button-prev{
  color:${prop => prop.theme.text} ;
  left:0 ;
  width:4rem ;
  top:60%;
  transform:rotate(180deg) ;
  background-image: url(${Arrow});
  background-position:center ;
  background-size:cover ;

  &:after{
    display:none ;
  }
}
`


const CardSwap = () => {
  return (
    <Container>
              <Swiper
              autoplay={{
                  delay:2000,
                  disableOnInteraction:false
              }}
              pagination={{
                  type: 'fraction'
              }}
              navigation={true}
              scrollbar={{
                  draggable:true
              }}
        effect={"cards"}
        grabCursor={true}
        modules={[Pagination,Navigation,Autoplay,EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Steven} alt='Steven' /></SwiperSlide>
        <SwiperSlide><img src={Img1} alt='Steven' /></SwiperSlide>
        <SwiperSlide><img src={Img2} alt='Steven' /></SwiperSlide>
        <SwiperSlide><img src={Img3} alt='Steven' /></SwiperSlide>
        <SwiperSlide><img src={Img4} alt='Steven' /></SwiperSlide>
        <SwiperSlide><img src={Img5} alt='Steven' /></SwiperSlide>
        <SwiperSlide><img src={Img6} alt='Steven' /></SwiperSlide>
        <SwiperSlide><img src={Img7} alt='Steven' /></SwiperSlide>
        <SwiperSlide><img src={Img8} alt='Steven' /></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default CardSwap